package modhelado.chat;

import modhelado.usuario.Usuario;

public class ChatGrupal extends Chat {
	public ChatGrupal(Usuario creador, String fecha) {
		super(creador, fecha);
	}

	public void addUsuario(Usuario usuario) {
		if(!this.usuarios.contains(usuario)){
			this.usuarios.add(usuario);
			System.out.println(usuario.getUsername() + " se ha unido al chat grupal del evento");
		}else{
			System.out.println("El usuario ya está en el grupo");
		}
	}

	public void eliminarUsuario(Usuario usuario) {
		if (this.usuarios.contains(usuario)) {
			this.usuarios.remove(usuario);
			System.out.println(usuario.getUsername() + " ha sido eliminado del chat grupal del evento");
		} else {
			System.out.println("El usuario no estaba en el grupo.");
		}
	}

}