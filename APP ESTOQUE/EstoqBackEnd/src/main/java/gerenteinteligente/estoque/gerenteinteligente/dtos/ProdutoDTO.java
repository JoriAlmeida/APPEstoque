package gerenteinteligente.estoque.gerenteinteligente.dtos;

import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;

public class ProdutoDTO {

	private int id_prod;
	private int fk_id_forn;
	private String prod_nome;
	private String prod_descricao;
	private int prod_ponto_rep;
	private double valor_quant;

	private String prod_status;
	
	
	public ProdutoDTO() {

	}
	
	public ProdutoDTO(ProdutoEntity produtoEntity) {
		this.id_prod = produtoEntity.getId_prod();
		this.fk_id_forn = produtoEntity.getFornecedorEntity() != null? produtoEntity.getFornecedorEntity().getId_forn() : 0;
		this.prod_nome = produtoEntity.getProd_nome();
		this.prod_descricao = produtoEntity.getProd_descricao();
		this.prod_ponto_rep = produtoEntity.getProd_ponto_rep();
		this.valor_quant = produtoEntity.getValor_quant();
		this.prod_status = produtoEntity.getProd_status();
	}
	
	public ProdutoDTO(int id_prod, int fk_id_forn, String prod_nome, String prod_descricao, int prod_ponto_rep, double valor_quant, String prod_status) {
		this.id_prod = id_prod;
		this.fk_id_forn = fk_id_forn;
		this.prod_nome = prod_nome;
		this.prod_descricao = prod_descricao;
		this.prod_ponto_rep = prod_ponto_rep;
		this.valor_quant = valor_quant;
		this.prod_status = prod_status;
	}

	public int getId_prod() {
		return id_prod;
	}
	public void setId_prod(int id_prod) {
		this.id_prod = id_prod;
	}
	
	public int getFk_id_forn() {
		return fk_id_forn;
	}

	public void setFk_id_forn(int fk_id_forn) {
		this.fk_id_forn = fk_id_forn;
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
	
	public String getProd_status() {
		return prod_status;
	}

	public void setProd_status(String prod_status) {
		this.prod_status = prod_status;
	}
	
	
	
}

