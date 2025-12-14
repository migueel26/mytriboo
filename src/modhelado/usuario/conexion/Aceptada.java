package modhelado.usuario.conexion;

import modhelado.usuario.Usuario;

public class Aceptada implements EstadoConexion {
	// PATRÓN SINGLETON
	private static Aceptada aceptada;

	private Aceptada() {}

	public static Aceptada aceptada() {
		if (aceptada == null) {
			aceptada = new Aceptada();
		}
		return aceptada;
	}

	@Override
	public void aceptar(Conexion conexion) {
		assert conexion != null;
		throw new IllegalArgumentException("ERROR: No se puede aceptar una conexión Aceptada");
	}

	@Override
	public void cancelar(Conexion conexion, Usuario cancelador, Usuario cancelado) {
		assert conexion != null;
		conexion.getEmisor().borrarConexion(conexion);
		conexion.getReceptor().borrarConexion(conexion);
	}

	@Override
	public void bloquear(Conexion conexion, Usuario bloqueador) {
		assert conexion != null;
		// Es necesario intercambiar roles porque el "emisor" es el "bloqueador" ahora
		if (conexion.getReceptor().equals(bloqueador)) conexion.intercambiarRoles();
		conexion.cambiarEstado(Bloqueada.bloqueada());
	}

	@Override
	public String conexion(Conexion conexion) {
		return "ACEPTADO";
	}
}