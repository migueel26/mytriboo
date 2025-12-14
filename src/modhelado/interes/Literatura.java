package modhelado.interes;

public class Literatura extends Interes {
	private static Literatura literatura;

	private Literatura() {}

	public static Literatura literatura() {
		if (literatura == null) {
			literatura = new Literatura();
		}
		return literatura;
	}

	@Override
	public String interes() {
		return "Literatura";
	}
}