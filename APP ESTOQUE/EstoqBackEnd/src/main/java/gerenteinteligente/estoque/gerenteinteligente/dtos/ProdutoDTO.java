package gerenteinteligente.estoque.gerenteinteligente.dtos;

import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;

public class ProdutoDTO {

	private int produto;
	private int fkidforn;
	private String prodnome;
	private String proddescricao;
	private int prodpontorep;
	private double prodvalor;
	private String prodstatus;

	public ProdutoDTO() {

	}

	public ProdutoDTO(ProdutoEntity produtoEntity) {
		this.produto = produtoEntity.getProduto();
		this.fkidforn = produtoEntity.getFornecedorEntity() != null ? produtoEntity.getFornecedorEntity().getId_forn()
				: 0;
		this.prodnome = produtoEntity.getProdnome();
		this.proddescricao = produtoEntity.getProddescricao();
		this.prodpontorep = produtoEntity.getProdpontorep();
		this.prodvalor = produtoEntity.getProdvalor();
		this.prodstatus = produtoEntity.getProdstatus();
	}

	public ProdutoDTO(int produto, int fkidforn, String prodnome, String proddescricao, int prodpontorep,
			double prodvalor, String prodstatus) {
		this.produto = produto;
		this.fkidforn = fkidforn;
		this.prodnome = prodnome;
		this.proddescricao = proddescricao;
		this.prodpontorep = prodpontorep;
		this.prodvalor = prodvalor;
		this.prodstatus = prodstatus;
	}

	public int getProduto() {
		return produto;
	}

	public void setProduto(int produto) {
		this.produto = produto;
	}

	public int getFkidforn() {
		return fkidforn;
	}

	public void setFkidforn(int fkidforn) {
		this.fkidforn = fkidforn;
	}

	public String getProdnome() {
		return prodnome;
	}

	public void setProdnome(String prodnome) {
		this.prodnome = prodnome;
	}

	public String getProddescricao() {
		return proddescricao;
	}

	public void setProddescricao(String proddescricao) {
		this.proddescricao = proddescricao;
	}

	public int getProdpontorep() {
		return prodpontorep;
	}

	public void setProdpontorep(int prodpontorep) {
		this.prodpontorep = prodpontorep;
	}

	public double getProdvalor() {
		return prodvalor;
	}

	public void setProdvalor(double prodvalor) {
		this.prodvalor = prodvalor;
	}

	public String getProdstatus() {
		return prodstatus;
	}

	public void setProdstatus(String prodstatus) {
		this.prodstatus = prodstatus;
	}

}
