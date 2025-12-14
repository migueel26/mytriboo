package modhelado.interes;

public class Tecnologia extends Interes {
	private static Tecnologia tecnologia;

	private Tecnologia() {}

	public static Tecnologia tecnologia() {
		if (tecnologia == null) {
			tecnologia = new Tecnologia();
		}
		return tecnologia;
	}

	@Override
	public String interes() {
		return "Tecnología";
	}
}