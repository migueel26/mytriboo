package modhelado;

import java.util.*;

import modhelado.interes.Interes;
import modhelado.tablon.evento.Evento;
import modhelado.tablon.publicacion.Publicacion;
import modhelado.usuario.Usuario;


public class GestorBaseDatos {
    private static List<Publicacion> publicaciones = new ArrayList<>();
    private static List<Evento> eventos = new ArrayList<>();
    private static List<Usuario> usuarios = new ArrayList<>();


    public static void guardarUsuario(Usuario usuario) {
        if (!usuarios.contains(usuario)) usuarios.add(usuario);
    }

    public static Optional<Usuario> consultarUsuario(String username) {
        Iterator<Usuario> it = usuarios.iterator();
        Optional<Usuario> usuario = Optional.empty();
        while (it.hasNext() && usuario.isEmpty()) {
            Usuario next = it.next();
            if (next.getUsername().equalsIgnoreCase(username)) {
                usuario = Optional.of(next);
            }
        }

        return usuario;
    }

    public static void guardarEvento(Evento evento){
        if (!eventos.contains(evento)) eventos.add(evento);
    }

    public static List<Evento> consultarEventos(List<Interes> intereses){
        List<Evento> eventosUsuario = new ArrayList<>();
        for (Evento evento : eventos) {
            if (evento.matchIntereses(intereses)) eventosUsuario.add(evento);
        }
        return eventosUsuario;
    }

    public static void guardarPublicacion(Publicacion publicacion) {
        if (!publicaciones.contains(publicacion)) publicaciones.add(publicacion);
    }

    public static List<Publicacion> consultarPublicaciones(List<Interes> intereses) {
        List<Publicacion> publicacionesUsuario = new ArrayList<>();
        for (Publicacion publicacion : publicaciones) {
            if (publicacion.matchIntereses(intereses)) publicacionesUsuario.add(publicacion);
        }
        return publicacionesUsuario;
    }

    public static void eliminarEvento(Evento evento) {
        Iterator<Usuario> it = evento.getParticipantes().asIterator();
        while (it.hasNext()) {
            Usuario usuario = it.next();
            usuario.quitarseEvento(evento);
        }

        eventos.remove(evento);
    }

    public static void eliminarPublicacion(Publicacion publicacion) {
        publicaciones.remove(publicacion);
    }
}

