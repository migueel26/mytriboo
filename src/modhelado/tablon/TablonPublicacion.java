package modhelado.tablon;

import modhelado.GestorBaseDatos;
import modhelado.interes.Interes;
import modhelado.tablon.publicacion.Publicacion;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.List;

public class TablonPublicacion extends Tablon {

	private List<Publicacion> publicaciones;

	public TablonPublicacion(String username_propietario) {
		super(username_propietario);
		this.publicaciones = new ArrayList<>();
	}

	public List<Publicacion> getTablonPublicacion() {
		return publicaciones;
	}

	@Override
	public void ver() {
		personalizar(intereses);
		System.out.println("Publicaciones para " + propietario);
		if(!publicaciones.isEmpty()) {
			for(Publicacion publicacion : publicaciones){
				System.out.println(publicacion);
			}
		} else {
			System.out.println("\tEste usuario no tiene publicaciones en su tablón.");
		}
	}

	@Override
	public int getSize() {return publicaciones.size();}

	public void addPublicacion(Publicacion publicacion){
		if (!publicaciones.contains(publicacion)) publicaciones.add(publicacion);
	}

	@Override
	public void personalizar(List<Interes> intereses) {
		// Se llama cada vez que un usuario accede al tablón
		publicaciones.clear();
		for(Publicacion publicacion: GestorBaseDatos.consultarPublicaciones(intereses)){
			if(!publicacion.getCreador().getUsername().equals(propietario)){
				addPublicacion(publicacion);
			}
		}
	}

	public Enumeration<Publicacion> getPublicaciones() {
		personalizar(intereses);
		return Collections.enumeration(publicaciones);
	}
}