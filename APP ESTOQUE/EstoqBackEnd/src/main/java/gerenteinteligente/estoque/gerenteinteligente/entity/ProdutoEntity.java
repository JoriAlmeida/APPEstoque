package gerenteinteligente.estoque.gerenteinteligente.entity;

import gerenteinteligente.estoque.gerenteinteligente.dtos.ProdutoDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
	private int produto;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "fkidforn")
	private FornecedorEntity fornecedorEntity;

	private String prodnome;
	private String proddescricao;
	private int prodpontorep;
	private double prodvalor;
	private String prodstatus;

	public ProdutoEntity() {

	}

	public ProdutoEntity(ProdutoDTO produtoDTO, FornecedorEntity fornecedorEntity) {
		this.produto = produtoDTO.getProduto();
		this.fornecedorEntity = new FornecedorEntity();
		this.fornecedorEntity.setId_forn(produtoDTO.getFkidforn());
		this.prodnome = produtoDTO.getProdnome();
		this.proddescricao = produtoDTO.getProddescricao();
		this.prodpontorep = produtoDTO.getProdpontorep();
		this.prodvalor = produtoDTO.getProdvalor();
		this.prodstatus = produtoDTO.getProdstatus();
	}

	public int getProduto() {
		return produto;
	}

	public void setProduto(int produto) {
		this.produto = produto;
	}

	public FornecedorEntity getFornecedorEntity() {
		return fornecedorEntity;
	}

	public void setFornecedorEntity(FornecedorEntity fornecedorEntity) {
		this.fornecedorEntity = fornecedorEntity;
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

	public ProdutoEntity setAlterarCadastro(ProdutoEntity produtoEntity, ProdutoDTO produtoDTO) {
		produtoEntity.setProdnome(produtoDTO.getProdnome());
		produtoEntity.setProddescricao(produtoDTO.getProddescricao());
		produtoEntity.setProdpontorep(produtoDTO.getProdpontorep());
		produtoEntity.fornecedorEntity.setId_forn(produtoDTO.getFkidforn());
		produtoEntity.setProdvalor(produtoDTO.getProdvalor());
		produtoEntity.setProdstatus(produtoDTO.getProdstatus());

		return produtoEntity;
	}

}
