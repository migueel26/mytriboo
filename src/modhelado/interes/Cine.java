package modhelado.interes;

public class Cine extends Interes {
	private static Cine cine;

	private Cine() {}

	public static Cine cine() {
		if (cine == null) {
			cine = new Cine();
		}
		return cine;
	}

	@Override
	public String interes() {
		return "Cine";
	}
}