package modhelado.usuario.conexion;

import modhelado.usuario.Usuario;

public class Bloqueada implements EstadoConexion {
    private static Bloqueada bloqueada;
    private Bloqueada() {}
    public static Bloqueada bloqueada() {
        if (bloqueada == null) {
            bloqueada = new Bloqueada();
        }
        return bloqueada;
    }
    @Override
    public void aceptar(Conexion conexion) {
        assert conexion != null;
        throw new IllegalArgumentException("ERROR: No se puede aceptar a una persona bloqueada");
    }

    @Override
    public void cancelar(Conexion conexion, Usuario cancelador, Usuario cancelado) {
        // Desbloquear
        assert conexion != null;
        assert conexion.getEmisor().equals(cancelador);
        conexion.getEmisor().borrarConexion(conexion);
        conexion.getReceptor().borrarConexion(conexion);
    }

    @Override
    public void bloquear(Conexion conexion, Usuario bloqueador) {
        assert conexion != null;
        throw new IllegalArgumentException("ERROR: No se puede bloquear a una persona Bloqueada");
    }

    @Override
    public String conexion(Conexion conexion) {
        return "BLOQUEADO";
    }
}
