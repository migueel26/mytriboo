package modhelado.tablon;

import modhelado.interes.Interes;
import modhelado.usuario.Usuario;

import java.util.ArrayList;
import java.util.List;

public abstract class Tablon {

	protected List<Interes> intereses;
	protected String propietario;

	protected Tablon(String username_propietario) {
		this.intereses = new ArrayList<>();
		this.propietario = username_propietario;
	}

	public abstract void ver();

	public void addInteres(Interes interes) {
		if(!intereses.contains(interes)) intereses.add(interes);
	}

	protected void addIntereses(List<Interes> intereses) {
		for(Interes interes : intereses) {
			if(!this.intereses.contains(interes)) this.intereses.add(interes);
		}
	}

	public abstract int getSize();

	/**
	 * 
	 * @param intereses
	 */
	public abstract void personalizar(List<Interes> intereses);

}