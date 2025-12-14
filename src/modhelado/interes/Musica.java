package modhelado.interes;

public class Musica extends Interes {
	private static Musica musica;

	private Musica() {}

	public static Musica musica() {
		if (musica == null) {
			musica = new Musica();
		}
		return musica;
	}

	@Override
	public String interes() {
		return "Música";
	}
}