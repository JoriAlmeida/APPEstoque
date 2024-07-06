package dtos;

import entity.UsuariosEntity;

public class UsuariosDTO {

	private int ID_USUARIO;
	private int USU_PERMISSAO;
	private String USU_NOME;
	private String USU_CPF;
	private String USU_EMAIL;
	private String USU_SENHA;
	
	public UsuariosDTO() {

	}
	
	public UsuariosDTO(UsuariosEntity usuariosEntity) {
		this.ID_USUARIO = usuariosEntity.getID_USUARIO();
		this.USU_PERMISSAO = usuariosEntity.getUSU_PERMISSAO();
		this.USU_NOME = usuariosEntity.getUSU_NOME();
		this.USU_CPF = usuariosEntity.getUSU_CPF();
		this.USU_EMAIL = usuariosEntity.getUSU_EMAIL();
		this.USU_SENHA = usuariosEntity.getUSU_SENHA();
	}
	
	
	public UsuariosDTO(int ID_USUARIO, int USU_PERMISSAO, String USU_NOME, String USU_CPF, String USU_EMAIL, String USU_SENHA) {
		this.ID_USUARIO = ID_USUARIO;
		this.USU_PERMISSAO = USU_PERMISSAO;
		this.USU_NOME = USU_NOME;
		this.USU_CPF = USU_CPF;
		this.USU_EMAIL = USU_EMAIL;
		this.USU_SENHA = USU_SENHA;
	}
	
	
	
	public int getID_USUARIO() {
		return ID_USUARIO;
	}
	public void setID_USUARIO(int iD_USUARIO) {
		ID_USUARIO = iD_USUARIO;
	}
	public int getUSU_PERMISSAO() {
		return USU_PERMISSAO;
	}
	public void setUSU_PERMISSAO(int uSU_PERMISSAO) {
		USU_PERMISSAO = uSU_PERMISSAO;
	}
	public String getUSU_NOME() {
		return USU_NOME;
	}
	public void setUSU_NOME(String uSU_NOME) {
		USU_NOME = uSU_NOME;
	}
	public String getUSU_CPF() {
		return USU_CPF;
	}
	public void setUSU_CPF(String uSU_CPF) {
		USU_CPF = uSU_CPF;
	}
	public String getUSU_EMAIL() {
		return USU_EMAIL;
	}
	public void setUSU_EMAIL(String uSU_EMAIL) {
		USU_EMAIL = uSU_EMAIL;
	}
	public String getUSU_SENHA() {
		return USU_SENHA;
	}
	public void setUSU_SENHA(String uSU_SENHA) {
		USU_SENHA = uSU_SENHA;
	}
	
}
