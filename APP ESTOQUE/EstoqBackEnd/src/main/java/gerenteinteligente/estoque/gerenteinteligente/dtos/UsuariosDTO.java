package gerenteinteligente.estoque.gerenteinteligente.dtos;

import gerenteinteligente.estoque.gerenteinteligente.entity.UsuariosEntity;

public class UsuariosDTO {

	private int id_usuario;
	private int usu_permissao;
	private String usu_nome;
	private String usu_cpf;
	private String email;
	private String usu_senha;
	
	public UsuariosDTO() {

	}
	
	public UsuariosDTO(UsuariosEntity usuariosEntity) {
		this.id_usuario = usuariosEntity.getId_usuario();
		this.usu_permissao = usuariosEntity.getUsu_permissao();
		this.usu_nome = usuariosEntity.getUsu_nome();
		this.usu_cpf = usuariosEntity.getUsu_cpf();
		this.email = usuariosEntity.getEmail();
		this.usu_senha = usuariosEntity.getUsu_senha();
	}
	
	
	public UsuariosDTO(int id_usuario, int usu_permissao, String usu_nome, String usu_cpf, String email, String usu_senha) {
		this.id_usuario = id_usuario;
		this.usu_permissao = usu_permissao;
		this.usu_nome = usu_nome;
		this.usu_cpf = usu_cpf;
		this.email = email;
		this.usu_senha = usu_senha;
	}
	
	
	public int getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(int id_usuario) {
		this.id_usuario = id_usuario;
	}

	public int getUsu_permissao() {
		return usu_permissao;
	}

	public void setUsu_permissao(int usu_permissao) {
		this.usu_permissao = usu_permissao;
	}

	public String getUsu_nome() {
		return usu_nome;
	}

	public void setUsu_nome(String usu_nome) {
		this.usu_nome = usu_nome;
	}

	public String getUsu_cpf() {
		return usu_cpf;
	}

	public void setUsu_cpf(String usu_cpf) {
		this.usu_cpf = usu_cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsu_senha() {
		return usu_senha;
	}

	public void setUsu_senha(String usu_senha) {
		this.usu_senha = usu_senha;
	}
	
	
}
