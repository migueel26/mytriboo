package modhelado.usuario;

import modhelado.GestorBaseDatos;
import modhelado.interes.Interes;
import modhelado.tablon.TablonEventos;
import modhelado.tablon.TablonPublicacion;
import modhelado.tablon.publicacion.Publicacion;
import modhelado.usuario.conexion.Bloqueada;
import modhelado.usuario.conexion.Conexion;
import modhelado.tablon.evento.Evento;
import modhelado.chat.Chat;
import modhelado.interes.DescripcionInteres;
import modhelado.usuario.conexion.Pendiente;

import java.util.*;

public class Usuario {
	private String username;
	private String nombre;
	private String apellidos;
	private String correo;
	private String fechaNacimiento;
	private boolean vetado;
	private List<DescripcionInteres> intereses;

	private List<Conexion> conexiones;

	private List<Evento> eventos;
	private List<Publicacion> publicacionesCreadas;
	private final TablonEventos tablonEventos;
	private final TablonPublicacion tablonPublicacion;

	private List<Chat> chats;


	//CONSTRUCTOR
	public Usuario(String username, String nombre, String apellidos, String correo, String fechaNacimiento) {
		// Constraint: NombresUsuarioDistintos
		assert GestorBaseDatos.consultarUsuario(username).isEmpty();

		this.username = username.toLowerCase();
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.correo = correo;
		this.fechaNacimiento = fechaNacimiento;
		this.vetado = false;

		this.intereses = new ArrayList<>();
		this.conexiones = new ArrayList<>();
		this.eventos = new ArrayList<>();
		this.tablonEventos = new TablonEventos(username);
		this.tablonPublicacion = new TablonPublicacion(username);
		this.publicacionesCreadas = new ArrayList<>();
		this.chats = new ArrayList<>();

		GestorBaseDatos.guardarUsuario(this);
	}



	//GESTIÓN USUARIO
	public boolean getEstadoVetado() {
		return vetado;
	}
	public void setVetado(boolean vetado) {
		this.vetado = vetado;
	}
	public String getNombre() {
		return nombre;
	}
	public String getApellidos() {
		return apellidos;
	}
	public String getCorreo() {
		return correo;
	}
	public String getFechaNacimiento() {
		return fechaNacimiento;
	}
	public String getUsername() {
		return username;
	}



	//GESTIÓN CONEXIONES
	public void addConexion(Conexion conexion) {
		assert conexion != null;
		if (!conexiones.contains(conexion)) {
			conexiones.add(conexion);
		}
	}

	public void addChat(Chat chat){
		assert chat != null;
		if(!chats.contains(chat)){
			chats.add(chat);
		}
	}

	public void enviarSolicitud(Usuario usuario) {
		// Constraint: ConexionUnicaParUsuarios
		assert !this.equals(usuario) && buscarConexion(usuario).isEmpty() && !vetado;
		new Conexion(this, usuario, Pendiente.pendiente());
	}

	public void aceptarConexion(Usuario usuario) {
		Optional<Conexion> conexion = buscarConexion(usuario);
		if (conexion.isPresent()) {
			assert this.equals(conexion.get().getReceptor());
			conexion.get().aceptar();
		}
	}

	public void cancelarConexion(Usuario usuario) {
		Optional<Conexion> conexion = buscarConexion(usuario);
        if (conexion.isPresent()) {
			conexion.get().cancelar(this, usuario);
		}
	}

	public void borrarConexion(Conexion conexion) {
		conexiones.remove(conexion);
	}

	public void bloquearConexion(Usuario usuario) {
		Optional<Conexion> conexion = buscarConexion(usuario);
		if (conexion.isPresent()) {
			// Constraint: ConexionUnicaParUsuarios
			conexion.get().bloquear(this);
		} else {
			new Conexion(this, usuario, Bloqueada.bloqueada());
		}
	}

	public Optional<Conexion> buscarConexion(Usuario usuario) {
		Optional<Conexion> conexion = Optional.empty();
		Iterator<Conexion> it = conexiones.iterator();
		while (it.hasNext() && conexion.isEmpty()) {
			Conexion next = it.next();
			if ((next.getEmisor().equals(this) && next.getReceptor().equals(usuario))
					|| (next.getEmisor().equals(usuario) && next.getReceptor().equals(this))) {
				conexion = Optional.of(next);
			}
		}
		return conexion;
	}

	public Enumeration<Conexion> getConexiones() {
		return Collections.enumeration(conexiones);
	}


	//GESTIÓN INTERESES
	public Enumeration<DescripcionInteres> getIntereses() {
		return Collections.enumeration(intereses);
	}

	public String verIntereses(){
		return intereses.toString();
	}

	public void addInteres(Interes interes, String descripcion) {
		assert interes != null && descripcion != null;
		intereses.add(new DescripcionInteres(descripcion, this, interes));
		tablonEventos.addInteres(interes);
		tablonPublicacion.addInteres(interes);
	}

	public void addIntereses(List<DescripcionInteres> intereses) {
		for (DescripcionInteres interes : intereses) {
			if(!this.intereses.contains(interes)) this.intereses.add(interes);
			tablonPublicacion.addInteres(interes.getInteres());
			tablonEventos.addInteres(interes.getInteres());
		}
	}

	//GESTIÓN EVENTOS
	public Enumeration<Evento> getEventos() {
		return Collections.enumeration(eventos);
	}

	public void verEventos() {
		System.out.println("--> Eventos creados por " + username + ":");
		if (!eventos.isEmpty()) {
			for(Evento evento : eventos){
				System.out.println(evento);
			}
		} else{
			System.out.println("Este usuario no tiene aún eventos creados.\n");
		}

	}

	public void crearEvento(String titulo, String fecha, Integer aforo, String lugar, String descripcion, List<Interes> intereses) {
		// Constraint: UsuarioVetado
		assert !vetado;

		Evento evento = new Evento(this, titulo, fecha, aforo, lugar,descripcion, intereses);

		assert !eventos.contains(evento);

		eventos.add(evento);
		chats.add(evento.getChat());

		GestorBaseDatos.guardarEvento(evento);
	}

	public void eliminarEvento(Evento evento) {
		assert evento.getCreador().equals(this);
		GestorBaseDatos.eliminarEvento(evento);
	}

	public void accederEvento(Evento evento) {
		// Constraint: UsuarioVetado
		assert !vetado && evento.hayHueco();

		evento.addUsuario(this);
		if(!eventos.contains(evento)) {
			eventos.add(evento);
			chats.add(evento.getChat());
		}
	}

	public void quitarseEvento(Evento evento) {
		assert evento != null && eventos.contains(evento) && !evento.getCreador().equals(this);
		evento.eliminarUsuario(this);
		chats.remove(evento.getChat());
		eventos.remove(evento);
	}



	// GESTIÓN PUBLICACIONES
	public Enumeration<Publicacion> getPublicacionesCreadas() {
		return Collections.enumeration(publicacionesCreadas);
	}

	public void verPublicaciones(){
		System.out.println("--> Publicaciones creadas por " + username + ":");
		if(!publicacionesCreadas.isEmpty()){
			for(Publicacion publicacion : publicacionesCreadas){
				System.out.println(publicacion);
			}
		} else {
			System.out.println("Este usuario no tiene aún publicaciones creadas.\n");
		}

	}

	public void crearPublicacion(String contenido, String fecha, List<Interes> intereses) {
		assert !vetado && contenido != null && fecha != null;
		Publicacion publicacion = new Publicacion(this, fecha, contenido, intereses);
		this.publicacionesCreadas.add(publicacion);

		GestorBaseDatos.guardarPublicacion(publicacion);
	}

	public void eliminarPublicacion(Publicacion publicacion) {
		assert publicacion != null && publicacion.getCreador().equals(this);
		publicacionesCreadas.remove(publicacion);
		GestorBaseDatos.eliminarPublicacion(publicacion);
	}

	public void darLike(Publicacion publicacion) {
		assert !vetado;
		publicacion.darLike(this);
	}

	public void quitarLike(Publicacion publicacion) {
		publicacion.quitarLike(this);
	}

	// GESTIÓN TABLONES
	public TablonEventos getTablonEventos() {
		assert !vetado;
		return tablonEventos;
	}

	public TablonPublicacion getTablonPublicacion() {
		assert !vetado;
		return tablonPublicacion;
	}



	// GESTIÓN CHATS
	public Enumeration<Chat> getChats() {
		return Collections.enumeration(chats);
	}

	public void enviarMensaje(String mensaje, Chat chat) {
		assert chat != null && mensaje != null && !vetado;
		chat.enviarMensaje(this, mensaje, new Date().toString());
	}

	public void verChat (Chat chat) {
		System.out.println(chat);
	}



	//OVERRIDE
	@Override
	public boolean equals(Object obj) {
		return obj instanceof Usuario that
				&& this.username.equalsIgnoreCase(that.username);
	}

	@Override
	public int hashCode() {
		return username.toLowerCase().hashCode();
	}
}