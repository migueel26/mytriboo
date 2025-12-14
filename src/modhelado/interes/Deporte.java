package modhelado.interes;

public class Deporte extends Interes {
	private static Deporte deporte;

	private Deporte() {}

	public static Deporte deporte() {
		if (deporte == null) {
			deporte = new Deporte();
		}
		return deporte;
	}

	@Override
	public String interes() {
		return "Deporte";
	}
}