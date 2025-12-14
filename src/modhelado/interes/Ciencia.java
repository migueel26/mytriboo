package modhelado.interes;

public class Ciencia extends Interes {
	private static Ciencia ciencia;

	private Ciencia() {}

	public static Ciencia ciencia() {
		if (ciencia == null) {
			ciencia = new Ciencia();
		}
		return ciencia;
	}

	@Override
	public String interes() {
		return "Ciencia";
	}
}