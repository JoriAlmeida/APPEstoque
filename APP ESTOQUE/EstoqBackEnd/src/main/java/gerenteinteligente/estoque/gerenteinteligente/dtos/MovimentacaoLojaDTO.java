package gerenteinteligente.estoque.gerenteinteligente.dtos;

import gerenteinteligente.estoque.gerenteinteligente.entity.MovimentacaoLojaEntity;

public class MovimentacaoLojaDTO {

	private int id_mov_loja;
	private int fk_id_loja;
	private int fk_id_prod;
	private int mov_tipo;
	private int mov_qtde;
	private double mov_valor;
	private int mov_ponto_rep;
	private double mov_valor_medio;

	public MovimentacaoLojaDTO(MovimentacaoLojaEntity movimentacaoLojaEntity) {
		this.id_mov_loja = movimentacaoLojaEntity.getId_mov_loja();
		this.fk_id_loja = movimentacaoLojaEntity.getLojaEntity() != null
				? movimentacaoLojaEntity.getLojaEntity().getLoja()
				: 0;
		this.fk_id_prod = movimentacaoLojaEntity.getProdutoEntity() != null
				? movimentacaoLojaEntity.getProdutoEntity().getId_prod()
				: 0;
		this.mov_tipo = movimentacaoLojaEntity.getMov_tipo();
		this.mov_qtde = movimentacaoLojaEntity.getMov_qtde();
		this.mov_valor = movimentacaoLojaEntity.getMov_valor();
		this.mov_ponto_rep = movimentacaoLojaEntity.getMov_ponto_rep();
		this.mov_valor_medio = movimentacaoLojaEntity.getMov_valor_medio();
	}

	public MovimentacaoLojaDTO(int id_mov_loja, int fk_id_loja, int fk_id_prod, int mov_tipo, int mov_qtde,
			double mov_valor, int mov_ponto_rep, double mov_valor_medio) {
		this.id_mov_loja = id_mov_loja;
		this.fk_id_loja = fk_id_loja;
		this.fk_id_prod = fk_id_prod;
		this.mov_tipo = mov_tipo;
		this.mov_qtde = mov_qtde;
		this.mov_valor = mov_valor;
		this.mov_ponto_rep = mov_ponto_rep;
		this.mov_valor_medio = mov_valor_medio;
	}

	public MovimentacaoLojaDTO() {

	}

	public int getId_mov_loja() {
		return id_mov_loja;
	}

	public void setId_mov_loja(int id_mov_loja) {
		this.id_mov_loja = id_mov_loja;
	}

	public int getFk_id_loja() {
		return fk_id_loja;
	}

	public void setFk_id_loja(int fk_id_loja) {
		this.fk_id_loja = fk_id_loja;
	}

	public int getFk_id_prod() {
		return fk_id_prod;
	}

	public void setFk_id_prod(int fk_id_prod) {
		this.fk_id_prod = fk_id_prod;
	}

	public int getMov_tipo() {
		return mov_tipo;
	}

	public void setMov_tipo(int mov_tipo) {
		this.mov_tipo = mov_tipo;
	}

	public int getMov_qtde() {
		return mov_qtde;
	}

	public void setMov_qtde(int mov_qtde) {
		this.mov_qtde = mov_qtde;
	}

	public double getMov_valor() {
		return mov_valor;
	}

	public void setMov_valor(double mov_valor) {
		this.mov_valor = mov_valor;
	}

	public int getMov_ponto_rep() {
		return mov_ponto_rep;
	}

	public void setMov_ponto_rep(int mov_ponto_rep) {
		this.mov_ponto_rep = mov_ponto_rep;
	}

	public double getMov_valor_medio() {
		return mov_valor_medio;
	}

	public void setMov_valor_medio(double mov_valor_medio) {
		this.mov_valor_medio = mov_valor_medio;
	}

}
