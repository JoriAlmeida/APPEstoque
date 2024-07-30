package gerenteinteligente.estoque.gerenteinteligente.dtos;

import gerenteinteligente.estoque.gerenteinteligente.entity.EstoqueEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;

public class EstoqueDTO {

	
    private int estoque;
    private int estoqueidprod;
    private int estoquetipo;
    private int estoqueqtd;
    private double estoquevalor;
    private int estoquepontrep;
    private double estoquevalormedio;
    
    
	public EstoqueDTO() {

	}
    
    
	public EstoqueDTO(EstoqueEntity estoqueEntity) {
		this.estoque = estoqueEntity.getEstoque();
		this.estoqueidprod = estoqueEntity.getProdutoEntity() != null? estoqueEntity.getProdutoEntity().getId_prod() : 0;
		this.estoquetipo = estoqueEntity.getEstoquetipo();
		this.estoqueqtd = estoqueEntity.getEstoqueqtd();
		this.estoquevalor = estoqueEntity.getEstoquevalor();
		this.estoquepontrep = estoqueEntity.getEstoquepontrep();
		this.estoquevalormedio = estoqueEntity.getEstoquevalormedio();
	}
	
	
	public EstoqueDTO(int estoque, int estoqueidprod, int estoquetipo, int estoqueqtd, double estoquevalor, int estoquepontrep, double estoquevalormedio) {
		this.estoque = estoque;
		this.estoqueidprod = estoqueidprod;
		this.estoquetipo = estoquetipo;
		this.estoqueqtd = estoqueqtd;
		this.estoquevalor = estoquevalor;
		this.estoquepontrep = estoquepontrep;
		this.estoquevalormedio = estoquevalormedio;
	}
    
    

	public int getEstoque() {
		return estoque;
	}
	public void setEstoque(int estoque) {
		this.estoque = estoque;
	}

		
	public int getEstoqueidprod() {
		return estoqueidprod;
	}


	public void setEstoqueidprod(int estoqueidprod) {
		this.estoqueidprod = estoqueidprod;
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
