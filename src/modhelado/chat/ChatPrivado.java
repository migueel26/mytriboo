package modhelado.chat;

import modhelado.GestorBaseDatos;
import modhelado.usuario.Usuario;
import modhelado.usuario.conexion.Aceptada;
import modhelado.usuario.conexion.Bloqueada;
import modhelado.usuario.conexion.Conexion;


public class ChatPrivado extends Chat {
	private Usuario usuario1;
	private Usuario usuario2;

	public ChatPrivado(Usuario usuario1, Usuario usuario2, String fecha) {
		super(usuario1, fecha);
		// Constraint: ChatPrivadoConexionAceptada
		assert usuario1.buscarConexion(usuario2).orElseThrow().getEstado().equals(Aceptada.aceptada());

		// Constraint: chatPrivadoUsuariosDiferentes
		assert !usuario1.equals(usuario2);

		this.usuarios.add(usuario2);

		this.usuario1 = usuario1;
		this.usuario2 = usuario2;
	}

	@Override
	public void enviarMensaje(Usuario remitente, String texto, String fechaActual) {
		assert !usuario1.buscarConexion(usuario2).orElseThrow().getEstado().equals(Bloqueada.bloqueada());
		super.enviarMensaje(remitente, texto, fechaActual);
	}
}