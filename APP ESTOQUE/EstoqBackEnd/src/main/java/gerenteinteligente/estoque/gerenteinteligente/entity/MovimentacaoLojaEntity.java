package gerenteinteligente.estoque.gerenteinteligente.entity;

import gerenteinteligente.estoque.gerenteinteligente.dtos.MovimentacaoLojaDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "movimentacaoloja")
public class MovimentacaoLojaEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_mov_loja;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "fk_id_loja")
	private LojaEntity lojaEntity;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "fk_id_prod")
	private ProdutoEntity produtoEntity;
	
	private int mov_tipo;
	private int mov_qtde;
	private double mov_valor;
	private int mov_ponto_rep;
	private double mov_valor_medio;
	
	
	public MovimentacaoLojaEntity() {
		
	}
	

public MovimentacaoLojaEntity(MovimentacaoLojaDTO movimentacaoLojaDTO, LojaEntity lojaEnity, ProdutoEntity produtoEntity) {
		this.id_mov_loja = movimentacaoLojaDTO.getId_mov_loja();
		this.lojaEntity = new LojaEntity();
		this.lojaEntity.setLoja(movimentacaoLojaDTO.getFk_id_loja());
		this.produtoEntity = new ProdutoEntity();
		this.produtoEntity.setId_prod(movimentacaoLojaDTO.getFk_id_prod());
		this.mov_tipo = movimentacaoLojaDTO.getMov_tipo();
		this.mov_qtde = movimentacaoLojaDTO.getMov_qtde();
		this.mov_valor = movimentacaoLojaDTO.getMov_valor();
		this.mov_ponto_rep = movimentacaoLojaDTO.getMov_ponto_rep();
		this.mov_valor_medio = movimentacaoLojaDTO.getMov_valor_medio();
	}
	
	
	public int getId_mov_loja() {
		return id_mov_loja;
	}
	public void setId_mov_loja(int id_mov_loja) {
		this.id_mov_loja = id_mov_loja;
	}

	
	public LojaEntity getLojaEntity() {
		return lojaEntity;
	}


	public void setLojaEntity(LojaEntity lojaEntity) {
		this.lojaEntity = lojaEntity;
	}


	public ProdutoEntity getProdutoEntity() {
		return produtoEntity;
	}


	public void setProdutoEntity(ProdutoEntity produtoEntity) {
		this.produtoEntity = produtoEntity;
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
