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
	private int idmovimentacao;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "fkidloja")
	private LojaEntity lojaEntity;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "fkidprod")
	private ProdutoEntity produtoEntity;

	private int movqtde;
	private double movvalor;
	private int movpontorep;

	public MovimentacaoLojaEntity() {

	}

	public MovimentacaoLojaEntity(MovimentacaoLojaDTO movimentacaoLojaDTO, LojaEntity lojaEnity, ProdutoEntity produtoEntity) {
		this.idmovimentacao = movimentacaoLojaDTO.getIdmovimentacao();
		this.lojaEntity = new LojaEntity();
		this.produtoEntity = new ProdutoEntity();
		this.movqtde = movimentacaoLojaDTO.getMovqtde();
		this.movvalor = movimentacaoLojaDTO.getMovvalor();
		this.movpontorep = movimentacaoLojaDTO.getMovpontorep();
	}

	public int getIdmovimentacao() {
		return idmovimentacao;
	}

	public void setIdmovimentacao(int idmovimentacao) {
		this.idmovimentacao = idmovimentacao;
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
