package gerenteinteligente.estoque.gerenteinteligente.entity;


import gerenteinteligente.estoque.gerenteinteligente.dtos.FornecedorDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "fornecedor")
public class FornecedorEntity {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_forn;
	
	private String forn_nome;
	private String forn_telefone;
	
	private String forn_email;
	private String forn_cnpj;
	private String forn_endereco;
	
	public FornecedorEntity() {

	}
	
	
	public FornecedorEntity(FornecedorDTO fornecedorDTO) {
		this.id_forn = fornecedorDTO.getId_forn();
		this.forn_nome = fornecedorDTO.getForn_nome();
		this.forn_telefone = fornecedorDTO.getForn_telefone();
		this.forn_email = fornecedorDTO.getForn_email();
		this.forn_cnpj = fornecedorDTO.getForn_cnpj();
		this.forn_endereco = fornecedorDTO.getForn_endereco();

	}
	
	public FornecedorEntity(int id_forn, String forn_nome, String forn_telefone, String forn_email, String forn_cnpj, String forn_endereco) {
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
