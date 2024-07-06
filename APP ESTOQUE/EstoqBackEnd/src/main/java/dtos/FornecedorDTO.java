package dtos;

import entity.FornecedorEntity;

public class FornecedorDTO {

	
	private int id_forn;
	private String forn_nome;
	private String forn_telefone;
	private String forn_email;
	private String forn_cnpj;
	private String forn_endereco;
		
	
	public FornecedorDTO(){
	}
	
	public FornecedorDTO(FornecedorEntity fornecedorEntity) {
		this.id_forn = fornecedorEntity.getId_forn();
		this.forn_nome = fornecedorEntity.getForn_nome();
		this.forn_telefone = fornecedorEntity.getForn_telefone();
		this.forn_email = fornecedorEntity.getForn_email();
		this.forn_cnpj = fornecedorEntity.getForn_cnpj();
		this.forn_endereco = fornecedorEntity.getForn_endereco();
	}
	
	
	public FornecedorDTO(int id_forn, String forn_nome, String forn_telefone, String forn_email, String forn_cnpj, String forn_endereco) {
		this.id_forn = id_forn;
		this.forn_nome = forn_nome;
		this.forn_telefone = forn_telefone;
		this.forn_email = forn_email;
		this.forn_cnpj = forn_cnpj;
		this.forn_endereco = forn_endereco;
	}
	
	
	
	
	public int getId_forn() {
		return id_forn;
	}
	public void setId_forn(int id_forn) {
		this.id_forn = id_forn;
	}
	public String getForn_nome() {
		return forn_nome;
	}
	public void setForn_nome(String forn_nome) {
		this.forn_nome = forn_nome;
	}
	public String getForn_telefone() {
		return forn_telefone;
	}
	public void setForn_telefone(String forn_telefone) {
		this.forn_telefone = forn_telefone;
	}
	public String getForn_email() {
		return forn_email;
	}
	public void setForn_email(String forn_email) {
		this.forn_email = forn_email;
	}
	public String getForn_cnpj() {
		return forn_cnpj;
	}
	public void setForn_cnpj(String forn_cnpj) {
		this.forn_cnpj = forn_cnpj;
	}
	public String getForn_endereco() {
		return forn_endereco;
	}
	public void setForn_endereco(String forn_endereco) {
		this.forn_endereco = forn_endereco;
	}
}
