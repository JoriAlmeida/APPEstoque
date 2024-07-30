package gerenteinteligente.estoque.gerenteinteligente.entity;

import gerenteinteligente.estoque.gerenteinteligente.dtos.LojaDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "loja")
public class LojaEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int loja;
	private String loja_nome;
	private String loja_endereco;
	private String loja_contato;

	public LojaEntity() {

	}

	public LojaEntity(LojaDTO lojaDTO) {
		this.loja = lojaDTO.getLoja();
		this.loja_nome = lojaDTO.getLoja_nome();
		this.loja_endereco = lojaDTO.getLoja_endereco();
		this.loja_contato = lojaDTO.getLoja_contato();
	}

	public int getLoja() {
		return loja;
	}

	public void setLoja(int loja) {
		this.loja = loja;
	}

	public String getLoja_nome() {
		return loja_nome;
	}

	public void setLoja_nome(String loja_nome) {
		this.loja_nome = loja_nome;
	}

	public String getLoja_endereco() {
		return loja_endereco;
	}

	public void setLoja_endereco(String loja_endereco) {
		this.loja_endereco = loja_endereco;
	}

	public String getLoja_contato() {
		return loja_contato;
	}

	public void setLoja_contato(String loja_contato) {
		this.loja_contato = loja_contato;
	}

}
