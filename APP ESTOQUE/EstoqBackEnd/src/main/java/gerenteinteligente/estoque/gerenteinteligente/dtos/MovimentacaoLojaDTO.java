package gerenteinteligente.estoque.gerenteinteligente.dtos;

import gerenteinteligente.estoque.gerenteinteligente.entity.MovimentacaoLojaEntity;

public class MovimentacaoLojaDTO {

	private int idmovimentacao;
	private int fkidloja;
	private int fkidprod;
	private int movqtde;
	private double movvalor;
	private int movpontorep;
	
	
	
	public MovimentacaoLojaDTO(MovimentacaoLojaEntity movimentacaoLojaEntity) {
	    this.idmovimentacao = movimentacaoLojaEntity.getIdmovimentacao();
	    this.fkidloja = movimentacaoLojaEntity.getLojaEntity() != null
	            ? movimentacaoLojaEntity.getLojaEntity().getLoja()
	            : 0;
	    this.fkidprod = movimentacaoLojaEntity.getProdutoEntity() != null
	            ? movimentacaoLojaEntity.getProdutoEntity().getProduto()
	            : 0;
	    this.movqtde = movimentacaoLojaEntity.getMovqtde();
	    this.movvalor = movimentacaoLojaEntity.getMovvalor();
	    this.movpontorep = movimentacaoLojaEntity.getMovpontorep();
	}
	
	public MovimentacaoLojaDTO(int idmovimentacao, int fkidloja, int fkidprod, int movqtde,double movvalor, int movpontorep) {
		this.idmovimentacao = idmovimentacao;
		this.fkidloja = fkidloja;
		this.fkidprod = fkidprod;
		this.movqtde = movqtde;
		this.movvalor = movvalor;
		this.movpontorep = movpontorep;

	}

	public MovimentacaoLojaDTO() {

	}

	public int getIdmovimentacao() {
		return idmovimentacao;
	}

	public void setIdmovimentacao(int idmovimentacao) {
		this.idmovimentacao = idmovimentacao;
	}

	public int getFkidloja() {
		return fkidloja;
	}

	public void setFkidloja(int fkidloja) {
		this.fkidloja = fkidloja;
	}

	public int getFkidprod() {
		return fkidprod;
	}

	public void setFkidprod(int fkidprod) {
		this.fkidprod = fkidprod;
	}

	public int getMovqtde() {
		return movqtde;
	}

	public void setMovqtde(int movqtde) {
		this.movqtde = movqtde;
	}

	public double getMovvalor() {
		return movvalor;
	}

	public void setMovvalor(double movvalor) {
		this.movvalor = movvalor;
	}

	public int getMovpontorep() {
		return movpontorep;
	}

	public void setMovpontorep(int movpontorep) {
		this.movpontorep = movpontorep;
	}

	


}
