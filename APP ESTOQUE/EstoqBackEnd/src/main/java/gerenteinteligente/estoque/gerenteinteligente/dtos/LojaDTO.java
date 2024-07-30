package gerenteinteligente.estoque.gerenteinteligente.dtos;

import gerenteinteligente.estoque.gerenteinteligente.entity.LojaEntity;

public class LojaDTO {

	private int loja;
	private String loja_nome;
	private String loja_endereco;
	private String loja_contato;

	public LojaDTO() {

	}

	public LojaDTO(LojaEntity lojaEntity) {
		this.loja = lojaEntity.getLoja();
		this.loja_nome = lojaEntity.getLoja_nome();
		this.loja_endereco = lojaEntity.getLoja_endereco();
		this.loja_contato = lojaEntity.getLoja_contato();
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
