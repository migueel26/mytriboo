package modhelado.tablon;

import modhelado.GestorBaseDatos;
import modhelado.interes.Interes;
import modhelado.tablon.evento.Evento;
import modhelado.GestorBaseDatos.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.List;



public class TablonEventos extends Tablon {

	private List<Evento> eventos;

	public TablonEventos(String username_propietario) {
		super(username_propietario);
		this.eventos = new ArrayList<>();
	}

	@Override
	public void ver() {
		personalizar(intereses);
		System.out.println("Eventos para " + propietario);
		if(!eventos.isEmpty()){
			for(Evento evento : eventos){
				System.out.println(evento);
			}
		} else {
			System.out.println("\tEste usuario no tiene eventos en su tablón.");
		}

	}

	@Override
	public int getSize() {return eventos.size();}

	public void addEvento(Evento evento){
		if (!eventos.contains(evento)) eventos.add(evento);
	}

	public Enumeration<Evento> getEventos() {
		personalizar(intereses);
		return Collections.enumeration(eventos);
	}

	@Override
	public void personalizar(List<Interes> intereses) {
		// Se llama cada vez que un usuario accede al tablón
		eventos.clear();
		for(Evento evento: GestorBaseDatos.consultarEventos(intereses)){
			if(!evento.getCreador().getUsername().equals(propietario)){
				addEvento(evento);
			}
		}
	}
}