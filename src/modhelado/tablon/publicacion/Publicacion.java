package modhelado.tablon.publicacion;

import modhelado.interes.Interes;
import modhelado.usuario.Usuario;

import java.util.*;

public class Publicacion {

	private List<Interes> intereses;
	private String fecha;
	private String contenido;
	private List<Usuario> usuarioLikes;
	private Usuario creador;

	public Publicacion(Usuario creador, String fecha, String contenido, List<Interes> intereses) {
		this.intereses = intereses;
		this.fecha = fecha;
		this.contenido = contenido;
		this.usuarioLikes = new ArrayList<>();
		this.creador = creador;
	}

	public int getLikes() {
		return usuarioLikes.size();
	}

	public Enumeration<Usuario> getUsuarioLikes() {
		return Collections.enumeration(usuarioLikes);
	}

	public String getContenido() {
		return this.contenido;
	}
	public void setContenido(String contenido) {
		this.contenido = contenido;
	}

	public String getFecha() {
		return this.fecha;
	}

	public Usuario getCreador() {
		return this.creador;
	}

	public void darLike(Usuario usuario) {
		// No se puede dar like a la misma publicación más de una vez
		assert !usuarioLikes.contains(usuario);
		usuarioLikes.add(usuario);
	}

	public void quitarLike(Usuario usuario) {
		usuarioLikes.remove(usuario);
	}


	// GESTIÓN INTERESES
	public Enumeration<Interes> getIntereses() {
		return Collections.enumeration(intereses);
	}

	protected void addInteres(Interes interes) {
		if (!intereses.contains(interes)) intereses.add(interes);
	}

	protected void addIntereses(List<Interes> intereses) {
		for (Interes interes : intereses) {
			if (!this.intereses.contains(interes)) this.intereses.add(interes);
		}
	}

	public void eliminarInteres(Interes interes) {
		if (this.intereses.contains(interes)) intereses.remove(interes);
	}

	public boolean matchIntereses(List<Interes> intereses){
		for (Interes interes : this.intereses) {
			if (intereses.contains(interes)) return true;
		}
		return false;
	}

	@Override
	public String toString() {
        String publicacion = "Autor: " + creador.getUsername() +
                "\nFecha de publicación: " + fecha +
                "\nContenido: " + contenido +
                "\nLikes: " + getLikes() + "\n";

		StringJoiner intereses = new StringJoiner(", ", "[", "]");
		for (Interes interes : this.intereses) {
			intereses.add(interes.interes());
		}
		return publicacion + "Intereses: " + intereses + "\n";
	}

	@Override
	public boolean equals(Object obj) {
		return obj instanceof Publicacion that
				&& this.creador.equals(that.creador)
				&& this.contenido.equals(that.contenido)
				&& this.fecha.equalsIgnoreCase(that.fecha);
	}
}