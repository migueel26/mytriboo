package modhelado.interes;

import modhelado.usuario.Usuario;

public class DescripcionInteres {
	private String descripcion;
	private Usuario usuario;
	private Interes interes;

	/**
	 * 
	 * @param descripcion
	 * @param usuario
	 */
	public DescripcionInteres(String descripcion, Usuario usuario, Interes interes) {
		this.descripcion = descripcion;
		this.usuario = usuario;
		this.interes = interes;
	}

	/**
	 * 
	 * @param texto
	 */
	public void setDescripcion(String texto) {
		assert texto != null;
		this.descripcion = texto;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public Interes getInteres() {
		return interes;
	}

	public String toString(){
		return interes.interes() + ": " + descripcion;
	}
}