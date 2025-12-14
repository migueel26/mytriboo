package modhelado;

import java.util.*;
import modhelado.chat.*;
import modhelado.tablon.evento.Evento;
import modhelado.tablon.publicacion.Publicacion;
import modhelado.usuario.*;

import static modhelado.interes.Ciencia.ciencia;
import static modhelado.interes.Cine.cine;
import static modhelado.interes.Deporte.deporte;
import static modhelado.interes.Literatura.literatura;
import static modhelado.interes.Musica.musica;
import static modhelado.interes.Tecnologia.tecnologia;

public class Main {
    public static void main(String[] args) {

        System.out.println("----------------- Welcome to MyTriboo! -----------------");
        //Crear varios usuarios
        System.out.println("-> CREACIÓN USUARIOS:");
        Usuario usuario1 = new Usuario("mariaa1", "María", "López","maria@gmail.com","01-01-2005");
        Usuario usuario2 = new Usuario("pepedm", "Pepe", "García","pepe@gmail.com","01-07-1999");
        Usuario usuario3 = new Usuario("elena_r", "Elena", "Ruiz", "elena.ruiz@hotmail.com", "15-11-2001");
        Usuario usuario4 = new Usuario("pablo04", "Pablo", "Pérez", "pablo@yahoo.es", "28-05-1995");
        Usuario usuario5 = new Usuario("ana_sanz", "Ana", "Sánchez", "ana.sanz@gmail.com", "10-03-1988");
        System.out.println("Usuarios creados: "+ usuario1.getUsername()+", "+usuario2.getUsername()+", "+usuario3.getUsername()+", "+usuario4.getUsername()+", "+usuario5.getUsername());
        System.out.println("\n\n---------------------------------------------------------------");


        //Asociar intereses a los usuarios
        System.out.println("-> ASOCIAR INTERESES A LOS USUARIOS");
        usuario1.addInteres(cine(), "Harry Potter");
        usuario1.addInteres(deporte(), "Baloncesto");
        usuario1.addInteres(ciencia(), "Física");
        usuario2.addInteres(cine(), "Titanic");
        usuario2.addInteres(deporte(), "Ping pong");
        usuario2.addInteres(musica(), "Música clásica");
        usuario3.addInteres(tecnologia(), "Avances Inteligencia Artificial");
        usuario3.addInteres(deporte(), "Atletismo");
        usuario3.addInteres(ciencia(), "Química");
        usuario4.addInteres(musica(), "Pop");
        usuario4.addInteres(cine(), "Cine español");
        usuario4.addInteres(literatura(), "Ciencia ficción");
        usuario5.addInteres(deporte(), "Natación");
        usuario5.addInteres(ciencia(), "Biología");


        System.out.println("Intereses usuario1: "+ usuario1.verIntereses());
        System.out.println("Intereses usuario2: "+ usuario2.verIntereses());
        System.out.println("Intereses usuario3: "+ usuario3.verIntereses());
        System.out.println("Intereses usuario4: "+ usuario4.verIntereses());
        System.out.println("Intereses usuario5: "+ usuario5.verIntereses());
        System.out.println("\n\n---------------------------------------------------------------");


        //Crear conexiones
        System.out.println("-> CREAR CONEXIONES ENTRE USUARIOS");
            //usuario1 envía solicitud a usuario2 //usuario2 acepta la solicitud del usuario1
        System.out.println("Usuario1 <--> Usuario2");
        System.out.println(usuario1.getUsername() + " envía solicitud a " + usuario2.getUsername());
        usuario1.enviarSolicitud(usuario2);
        System.out.println("\tEstado: " + usuario1.buscarConexion(usuario2).get().conexion());
        System.out.println(usuario2.getUsername() + " acepta la solicitud de " + usuario1.getUsername());
        usuario2.aceptarConexion(usuario1);
        System.out.println("\tEstado: " + usuario1.buscarConexion(usuario2).get().conexion());

            //usuario3 envía solicitud a usuario1 //usuario1 bloquea a usuario3 // usuario1 desbloquea a usuario3
        System.out.println("\nUsuario3 x--> Usuario1");
        System.out.println(usuario3.getUsername() + " envía solicitud a " + usuario1.getUsername());
        usuario3.enviarSolicitud(usuario1);
        System.out.println("\tEstado: " + usuario1.buscarConexion(usuario3).get().conexion());
        System.out.println(usuario1.getUsername() + " bloquea a " + usuario3.getUsername());
        usuario1.bloquearConexion(usuario3);
        System.out.println("\tEstado: " + usuario1.buscarConexion(usuario3).get().conexion());
        System.out.println(usuario1.getUsername() + " desbloquea a " + usuario3.getUsername());
        usuario1.cancelarConexion(usuario3);
        try {
            System.out.println("\tEstado: " + usuario1.buscarConexion(usuario3).get().conexion());
        } catch (NoSuchElementException e){
            System.out.println("\t---> ERROR: no hay estado porque no existe la conexión entre " + usuario1.getUsername() + " y " + usuario3.getUsername());
        }

            //usuario4 bloquea a usuario5 //usuario5 intenta desbloquear la conexión con usuario4 //usuario5 intenta enviar solicitud a usuario4
        System.out.println("\nUsuario4 --x Usuario5");
        System.out.println(usuario4.getUsername() + " bloquea a " + usuario5.getUsername());
        usuario4.bloquearConexion(usuario5);
        System.out.println("\tEstado: " + usuario4.buscarConexion(usuario5).get().conexion());
        System.out.println(usuario5.getUsername() + " desbloquea la conexión con " + usuario4.getUsername());
        try{
            usuario5.cancelarConexion(usuario4);
        } catch (AssertionError e){
            System.out.println("\t---> ERROR: " + usuario5.getUsername() + " no puede desbloquear al que lo bloqueó (" + usuario4.getUsername() + ")");
        }
        System.out.println("\tEstado: " + usuario4.buscarConexion(usuario5).get().conexion());
        System.out.println(usuario4.getUsername() + " envía solicitud a " + usuario5.getUsername());
        try{
            usuario4.enviarSolicitud(usuario5);
        } catch (AssertionError e){
            System.out.println("\t---> ERROR: " + usuario4.getUsername() + " no puede establecer más de una conexión con " + usuario5.getUsername() + ", primero tiene que desbloquearlo");
        }
        System.out.println("\tEstado: " + usuario4.buscarConexion(usuario5).get().conexion());

            //usuario1 intenta enviarse solicitud de conexión a sí mismo
        System.out.println("\nUsuario1 -- Usuario1");
        System.out.println(usuario1.getUsername() + " envía solicitud a " + usuario1.getUsername());
        try{
            usuario1.enviarSolicitud(usuario1);
        } catch (AssertionError e){
            System.out.println("\t---> ERROR: " + usuario1.getUsername() + " no puede enviarse solicitud a sí mismo");
        }

        System.out.println("\n\n---------------------------------------------------------------");



        //Crear eventos
        System.out.println("-> USUARIOS CREAN EVENTOS");
        usuario1.crearEvento("Museo del cine", "20-04-2026", 2, "Museo cine Málaga", "Ir a visitar el museo del cine de Málaga una tarde", List.of(cine()));
        usuario1.crearEvento("Feria de la ciencia y el deporte", "13-06-2026", 20, "Universidad", "Asistir a la feria de la ciencia y el deporte 2026", List.of(ciencia(),tecnologia(),deporte()));
        usuario4.crearEvento("Concierto música clásica", "05-02-2026", 6, "Avenida Andalucía", "¿A quién no le gusta un concierto?", List.of(musica()));

        usuario1.verEventos(); //2 eventos creados por usuario1
        usuario2.verEventos();
        usuario3.verEventos();
        usuario4.verEventos(); //1 evento creado por usuario4
        usuario5.verEventos();
        System.out.println("\n\n---------------------------------------------------------------");


        //Crear publicaciones
        System.out.println("-> USUARIOS CREAN PUBLICACIONES");
        usuario2.crearPublicacion("Nueva película de Marvel!!", "10-12-2025", List.of(cine()));
        usuario3.crearPublicacion("Este fin de semana es el mundial!", "20-11-2025", List.of(deporte()));
        usuario4.crearPublicacion("Nuevo lanzamiento de disco!", "14-10-2025", List.of(musica()));
        usuario5.crearPublicacion("Un nuevo asteroide en el sistema solar", "05-12-2025", List.of(ciencia()));

        usuario1.verPublicaciones();
        usuario2.verPublicaciones(); //1 publicacion creada
        usuario3.verPublicaciones(); //1 publicacion creada
        usuario4.verPublicaciones(); //1 publicacion creada
        usuario5.verPublicaciones(); //1 publicacion creada
        System.out.println("\n\n---------------------------------------------------------------");



        System.out.println("-> USUARIOS LE DAN LIKE A LAS PUBLICACIONES");
        Publicacion publicacion1 = usuario1.getTablonPublicacion().getPublicaciones().nextElement();
        System.out.println("--> CASO 1: Usuario1 da like a la primera publicación de su tablón");
        usuario1.darLike(publicacion1);
        System.out.println(publicacion1);
        System.out.println("--> CASO 2: Usuario1 quita el like a una publicación");
        usuario1.quitarLike(publicacion1);
        System.out.println(publicacion1);
        System.out.println("--> CASO 3: Usuario1 vuelve a quitar el like a una publicación (no pasa nada)");
        usuario1.quitarLike(publicacion1);
        System.out.println(publicacion1);
        System.out.println("\n\n---------------------------------------------------------------");



        System.out.println("-> MOSTRAR TABLONES DE EVENTOS Y DE PUBLICACIONES");
        //Acceder a los tablones de los usuarios
        System.out.println("--> Tablones del usuario1:");
        usuario1.getTablonEventos().ver();
        usuario1.getTablonPublicacion().ver();

        System.out.println("\n--> Tablones del usuario2:");
        usuario2.getTablonEventos().ver();
        usuario2.getTablonPublicacion().ver();

        System.out.println("\n--> Tablones del usuario3:");
        usuario3.getTablonEventos().ver();
        usuario3.getTablonPublicacion().ver();

        System.out.println("\n--> Tablones del usuario4:");
        usuario4.getTablonEventos().ver();
        usuario4.getTablonPublicacion().ver();

        System.out.println("\n--> Tablones del usuario5:");
        usuario5.getTablonEventos().ver();
        usuario5.getTablonPublicacion().ver();
        System.out.println("\n\n---------------------------------------------------------------");



        //Unirse a eventos
        System.out.println("-> USUARIOS SE UNEN A EVENTOS");
        System.out.println("--> CASO 1: Hay hueco (aforo disponible):");
        Evento evento1 = usuario2.getTablonEventos().getEventos().nextElement();
        evento1.verParticipantes();
        System.out.println("Usuario2 accede al primer evento de su tablón");
        usuario2.accederEvento(evento1);
        evento1.verParticipantes();

        System.out.println("\n--> CASO 2: No hay hueco (aforo no disponible):");
        Evento evento2 = usuario4.getTablonEventos().getEventos().nextElement();
        evento2.verParticipantes();
        try{
            usuario4.accederEvento(evento2);
        } catch (AssertionError e){
            System.out.println("\t---> ERROR: El usuario no puede acceder al evento porque el aforo es máximo.");
        }
        evento2.verParticipantes();

        System.out.println("\n\n---------------------------------------------------------------");


        //Chat grupal de eventos
        System.out.println("-> USUARIOS PARTICIPAN EN CHATS GRUPALES (DE EVENTOS)");
        Chat chatEvento1 = usuario2.getEventos().nextElement().getChat();
        System.out.println("Historial de chat grupal:");
        usuario2.enviarMensaje("Quedamos 10 minutos antes en la puerta del museo??", chatEvento1);
        usuario1.enviarMensaje("Valee, me viene perfecto", chatEvento1);
        usuario2.enviarMensaje("Perfecto, allí nos vemos", chatEvento1);
        usuario1.verChat(chatEvento1);

        System.out.println("\n\n---------------------------------------------------------------");


        //Chat privado
        System.out.println("-> USUARIOS PARTICIPAN EN CHATS PRIVADOS");
        Chat chatPrivado1 = usuario1.buscarConexion(usuario2).get().getChat();
        System.out.println("Historial de chat privado:");
        usuario1.enviarMensaje("HOLAAA", chatPrivado1);
        usuario2.enviarMensaje("hola!", chatPrivado1);
        usuario1.enviarMensaje("Quieres quedar esta tarde en el parque?", chatPrivado1);
        usuario2.enviarMensaje("Sii, podemos merendar allí!", chatPrivado1);
        usuario1.verChat(chatPrivado1);

        System.out.println("\n\n---------------------------------------------------------------");


        //Usuario vetado
        System.out.println("-> USUARIO VETADO");
        System.out.println("A un usuario vetado no se le permiten ciertas acciones en el sistema:");
        System.out.println("Vetamos al usuario5: \n");
        usuario5.setVetado(true);

        System.out.println("\n--> CASO 1: Usuario5 intenta enviar una solicitud:");
        try{
            usuario5.enviarSolicitud(usuario2);
        } catch (AssertionError e){
            System.out.println("\t---> ERROR: Un usuario vetado no puede enviar una solicitud de conexión");
        }

        System.out.println("\n--> CASO 2: Usuario5 intenta crear un evento: ");
        try{
            usuario5.crearEvento("Nuevo evento", "25-01-2026", 3, "Parque", "Descripción", List.of(deporte()));
        } catch (AssertionError e){
            System.out.println("\t---> ERROR: Un usuario vetado no puede crear un nuevo evento");
        }

        System.out.println("\n--> CASO 3: Usuario5 intenta crear una publicación: ");
        try{
            usuario5.crearPublicacion("Texto", "15-12-2025", List.of(deporte()));
        } catch (AssertionError e){
            System.out.println("\t---> ERROR: Un usuario vetado no puede crear una nueva publicación");
        }

        System.out.println("\n--> CASO 4: Usuario5 intenta acceder a su tablón de eventos y publicaciones:");
        try{
            usuario5.getTablonEventos().ver();
        } catch (AssertionError e){
            System.out.println("\t---> ERROR: Un usuario vetado no puede acceder a su tablón de eventos");
        }
        try{
            usuario5.getTablonPublicacion().ver();
        } catch (AssertionError e){
            System.out.println("\t---> ERROR: Un usuario vetado no puede acceder a su tablón de publicaciones");
        }

        System.out.println("\n\n---------------------------------------------------------------");
    }
}