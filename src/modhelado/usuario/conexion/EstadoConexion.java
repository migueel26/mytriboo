package modhelado.usuario.conexion;

import modhelado.usuario.Usuario;

public interface EstadoConexion {
    void aceptar(Conexion conexion);
    void cancelar(Conexion conexion, Usuario cancelador, Usuario cancelado);
    void bloquear(Conexion conexion, Usuario bloqueador);
    String conexion(Conexion conexion);
}
