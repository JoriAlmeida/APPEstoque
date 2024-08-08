package gerenteinteligente.estoque.gerenteinteligente.dtos;

import gerenteinteligente.estoque.gerenteinteligente.entity.EstoqueEntity;

public class EstoqueDTO {

    private int estoque;
    private int estoqueidprod;
    private int estoquetransferencia;
    private int estoquetipo;
    private int estoqueqtd;
    private double estoquevalor;
    private int estoquepontorep;


    public EstoqueDTO() {}

    public EstoqueDTO(EstoqueEntity estoqueEntity) {
        this.estoque = estoqueEntity.getEstoque();
        this.estoqueidprod = estoqueEntity.getProdutoEntity() != null ? estoqueEntity.getProdutoEntity().getProduto() : 0;
        this.estoquetransferencia = estoqueEntity.getEstoquetransferencia();
        this.estoquetipo = estoqueEntity.getEstoquetipo();
        this.estoqueqtd = estoqueEntity.getEstoqueqtd();
        this.estoquevalor = estoqueEntity.getEstoquevalor();
        this.estoquepontorep = estoqueEntity.getEstoquepontorep();

    }

    public EstoqueDTO(int estoque, int estoqueidprod,int estoquetransferencia, int estoquetipo, int estoqueqtd, double estoquevalor, int estoquepontorep) {
        this.estoque = estoque;
        this.estoqueidprod = estoqueidprod;
        this.estoquetransferencia = estoquetransferencia;
        this.estoquetipo = estoquetipo;
        this.estoqueqtd = estoqueqtd;
        this.estoquevalor = estoquevalor;
        this.estoquepontorep = estoquepontorep;
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
    
	public int getEstoquetransferencia() {
		return estoquetransferencia;
	}

	public void setEstoquetransferencia(int estoquetransferencia) {
		this.estoquetransferencia = estoquetransferencia;
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

	public int getEstoquepontorep() {
		return estoquepontorep;
	}

	public void setEstoquepontorep(int estoquepontorep) {
		this.estoquepontorep = estoquepontorep;
	}
    
    
}