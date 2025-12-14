package modhelado.tablon.evento;

import modhelado.GestorBaseDatos;
import modhelado.chat.Chat;
import modhelado.chat.ChatGrupal;
import modhelado.interes.Interes;
import modhelado.usuario.Usuario;

import java.util.*;

public class Evento {
	private List<Interes> intereses;
	private String titulo;
	private String fecha;
	private Integer aforo;
	private String lugar;
	private String descripcion;
	private Usuario creador;
	private List<Usuario> participantes;
	private ChatGrupal chatGrupal;


	public Evento(Usuario creador, String titulo, String fecha, Integer aforo, String lugar, String descripcion, List<Interes> intereses) {
		assert titulo != null && fecha != null && aforo > 0 && lugar != null && !intereses.isEmpty();

		this.intereses = intereses;
		this.titulo = titulo;
		this.fecha = fecha;
		this.aforo = aforo;
		this.lugar = lugar;
		this.descripcion = descripcion;
		this.creador = creador;
		this.chatGrupal = new ChatGrupal(creador, new Date().toString());

		this.participantes = new ArrayList<>();
		participantes.add(creador);
	}


	public String getTitulo() {return titulo;}

	public void setTitulo(String titulo) {this.titulo = titulo;}

	public String getFecha() {return fecha;}

	public void setFecha(String fecha) {this.fecha = fecha;}

	public Integer getAforo() {return aforo;}

	public void setAforo(Integer aforo) {this.aforo = aforo;}

	public String getLugar() {return lugar;}

	public void setLugar(String lugar) {this.lugar = lugar;}

	public boolean hayHueco(){
		return this.participantes.size() < aforo;
	}


	// GESTION INTERESES

	public List<Interes> getIntereses() {
		return intereses;
	}

	public void setIntereses(List<Interes> intereses) {
		this.intereses = intereses;
	}

	public void addInteres(Interes interes) {
		if(!intereses.contains(interes)) intereses.add(interes);
	}

	protected void addIntereses(List<Interes> intereses) {
		for(Interes interes : intereses) {
			if(!this.intereses.contains(interes)) this.intereses.add(interes);
		}
	}

	public void eliminarInteres(Interes interes) {
		if(this.intereses.contains(interes)) intereses.remove(interes);
	}

	public boolean matchIntereses(List<Interes> intereses){
		for (Interes interes : this.intereses) {
			if (intereses.contains(interes)) return true;
		}
		return false;
	}


	// GESTION USUARIOS
	public void addUsuario(Usuario usuario) {
		// Constraint: ParticipantesNoSuperaAforo
		assert participantes.size() < aforo;

		if (!participantes.contains(usuario)) {
			participantes.add(usuario);
			chatGrupal.addUsuario(usuario);
		}
	}

	public void eliminarUsuario(Usuario usuario) {
		// Constraint: CreadorEventoTambienAsistente
		assert !usuario.equals(creador);
		if (participantes.contains(usuario)) {
			chatGrupal.eliminarUsuario(usuario);
			participantes.remove(usuario);
		}
	}

	public Enumeration<Usuario> getParticipantes() {
		return Collections.enumeration(participantes);
	}

	public void verParticipantes(){
		System.out.println("Participantes del evento:");
		StringJoiner integrantes = new StringJoiner(", ", "[", "]");
		for (Usuario participante: participantes){
			integrantes.add(participante.getUsername());
		}
		System.out.println(integrantes);
	}
	
	public Usuario getCreador() {
		return this.creador;
	}

	// GESTION CHAT GRUPAL
	public ChatGrupal getChat(){
		return chatGrupal;
	}

	@Override
	public String toString() {
        String evento = "Titulo: " + titulo +
                "\nSe celebra el " + fecha + " en " + lugar +
                "\nAforo máximo: " + aforo +
                "\nDescripción: " + descripcion +
                "\nCreador: " + creador.getUsername() + "\n";

		StringJoiner intereses = new StringJoiner(", ", "[", "]");
		for (Interes interes : this.intereses){
			intereses.add(interes.interes());
		}
		return evento + "Intereses: " + intereses.toString() + "\n";
	}

	@Override
	public boolean equals(Object obj) {
		return obj instanceof Evento that
				&& this.creador.equals(that.creador)
				&& this.titulo.equalsIgnoreCase(that.titulo)
				&& this.fecha.equalsIgnoreCase(that.fecha);
	}

	@Override
	public int hashCode() {
		return creador.hashCode() + titulo.toLowerCase().hashCode() + fecha.toLowerCase().hashCode();
	}
}