package entity;


import com.estoque.aplicacao.entidades.TP_Movimentacao;

import dtos.ProdutoDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "produto")
public class ProdutoEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_prod;
	

	@ManyToOne
    @JoinColumn(name = "fk_id_forn")
	private FornecedorEntity fornecedorEntity;
	
	private String prod_nome;
	private String prod_descricao;
	private int prod_ponto_rep;
	private double valor_quant;
	

	
	public ProdutoEntity(ProdutoDTO produtoDTO) {
		this.id_prod = produtoDTO.getId_prod();
		this.fornecedorEntity = new FornecedorEntity();
		this.fornecedorEntity.setId_forn(produtoDTO.get());
		this.prod_nome = produtoDTO.getProd_nome();
		this.prod_descricao = produtoDTO.getProd_descricao();
		this.prod_ponto_rep = produtoDTO.getProd_ponto_rep();
		this.valor_quant = produtoDTO.getValor_quant();
	}

	
	public int getId_prod() {
		return id_prod;
	}
	public void setId_prod(int id_prod) {
		this.id_prod = id_prod;
	}
	public FornecedorEntity getFornecedorEntity() {
		return fornecedorEntity;
	}
	public void setFornecedorEntity(FornecedorEntity fornecedorEntity) {
		this.fornecedorEntity = fornecedorEntity;
	}
	public String getProd_nome() {
		return prod_nome;
	}
	public void setProd_nome(String prod_nome) {
		this.prod_nome = prod_nome;
	}
	public String getProd_descricao() {
		return prod_descricao;
	}
	public void setProd_descricao(String prod_descricao) {
		this.prod_descricao = prod_descricao;
	}
	public int getProd_ponto_rep() {
		return prod_ponto_rep;
	}
	public void setProd_ponto_rep(int prod_ponto_rep) {
		this.prod_ponto_rep = prod_ponto_rep;
	}
	public double getValor_quant() {
		return valor_quant;
	}
	public void setValor_quant(double valor_quant) {
		this.valor_quant = valor_quant;
	}

}
