package modhelado.usuario.conexion;

import modhelado.usuario.Usuario;

public class Pendiente implements EstadoConexion {
	// PATRÓN SINGLETON
	private static Pendiente pendiente;

	private Pendiente() {}

	public static Pendiente pendiente() {
		if (pendiente == null) {
			pendiente = new Pendiente();
		}
		return pendiente;
	}

	@Override
	public void aceptar(Conexion conexion) {
		assert conexion != null;
		conexion.cambiarEstado(Aceptada.aceptada());
		conexion.crearChatPrivado();
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
		return "PENDIENTE";
	}
}