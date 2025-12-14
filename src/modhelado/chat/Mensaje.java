package modhelado.chat;

import modhelado.interes.Interes;
import modhelado.usuario.Usuario;

import java.util.StringJoiner;

public class Mensaje {

	private String texto;
	private String fecha;
	private Usuario remitente;

	public Mensaje(String texto, String fecha, Usuario remitente) {
		this.texto = texto;
		this.fecha = fecha;
		this.remitente = remitente;
	}

	public String getTexto() {
		return texto;
	}

	public String getFecha() {
		return fecha;
	}

	public Usuario getRemitente() {
		return remitente;
	}

	public String toString() {
		StringBuilder mensaje = new StringBuilder();
		mensaje.append("[" + fecha + "] " + remitente.getUsername() + ": " + texto);

		return mensaje.toString();
	}
}