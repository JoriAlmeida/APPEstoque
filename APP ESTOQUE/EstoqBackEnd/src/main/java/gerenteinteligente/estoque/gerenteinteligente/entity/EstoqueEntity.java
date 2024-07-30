package gerenteinteligente.estoque.gerenteinteligente.entity;

import gerenteinteligente.estoque.gerenteinteligente.dtos.EstoqueDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "estoque")
public class EstoqueEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int estoque;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "estoqueidprod")
	private ProdutoEntity produtoEntity;
	private int estoquetipo;
	private int estoqueqtd;
	private double estoquevalor;
	private int estoquepontrep;
	private double estoquevalormedio;
	
	public EstoqueEntity() {
		
	}

	public EstoqueEntity(EstoqueDTO estoqueDTO) {
		this.estoque = estoqueDTO.getEstoque();
		this.produtoEntity = new ProdutoEntity();
		this.produtoEntity.setId_prod(estoqueDTO.getEstoqueidprod());
		this.estoquetipo = estoqueDTO.getEstoquetipo();
		this.estoqueqtd = estoqueDTO.getEstoqueqtd();
		this.estoquevalor = estoqueDTO.getEstoquevalor();
		this.estoquepontrep = estoqueDTO.getEstoquepontrep();
		this.estoquevalormedio = estoqueDTO.getEstoquevalormedio();
	}

	public int getEstoque() {
		return estoque;
	}

	public void setEstoque(int estoque) {
		this.estoque = estoque;
	}

	public ProdutoEntity getProdutoEntity() {
		return produtoEntity;
	}

	public void setProdutoEntity(ProdutoEntity produtoEntity) {
		this.produtoEntity = produtoEntity;
	}

	public int getEstoquetipo() {
		return estoquetipo;
	}

	public void setEstoquetipo(int estoquetipo) {
		this.estoquetipo = estoquetipo;
	}

	public int getEstoqueqtd() {
		return estoqueqtd;
	}

	public void setEstoqueqtd(int estoqueqtd) {
		this.estoqueqtd = estoqueqtd;
	}

	public double getEstoquevalor() {
		return estoquevalor;
	}

	public void setEstoquevalor(double estoquevalor) {
		this.estoquevalor = estoquevalor;
	}

	public int getEstoquepontrep() {
		return estoquepontrep;
	}

	public void setEstoquepontrep(int estoquepontrep) {
		this.estoquepontrep = estoquepontrep;
	}

	public double getEstoquevalormedio() {
		return estoquevalormedio;
	}

	public void setEstoquevalormedio(double estoquevalormedio) {
		this.estoquevalormedio = estoquevalormedio;
	}

}
