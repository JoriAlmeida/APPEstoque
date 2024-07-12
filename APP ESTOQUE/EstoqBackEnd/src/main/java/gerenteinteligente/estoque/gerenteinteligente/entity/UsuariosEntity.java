package gerenteinteligente.estoque.gerenteinteligente.entity;

import gerenteinteligente.estoque.gerenteinteligente.dtos.UsuariosDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario")
public class UsuariosEntity {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_usuario;
	

	private int usu_permissao;
	private String usu_nome;
	private String usu_cpf;
	
	private String email;
	
	private String usu_senha;
	
	public UsuariosEntity() {

	}
	
	public UsuariosEntity(UsuariosDTO usuariosDTO) {
		this.id_usuario = usuariosDTO.getId_usuario();
		this.usu_permissao = usuariosDTO.getUsu_permissao();
		this.usu_nome = usuariosDTO.getUsu_nome();
		this.usu_cpf = usuariosDTO.getUsu_cpf();
		this.email = usuariosDTO.getEmail();
		this.usu_senha = usuariosDTO.getUsu_senha();
	}
	
	
	public UsuariosEntity(int id_usuario, int usu_permissao, String usu_nome, String usu_cpf, String email, String usu_senha) {
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

