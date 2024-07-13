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
	private int id_prod;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "fk_id_forn")
	private FornecedorEntity fornecedorEntity;
	
	private String prod_nome;
	private String prod_descricao;
	private int prod_ponto_rep;
	private double valor_quant;
	private String prod_status;
	

	public ProdutoEntity() {

	}

	public ProdutoEntity(ProdutoDTO produtoDTO, FornecedorEntity fornecedorEntity) {
		this.id_prod = produtoDTO.getId_prod();
	    this.fornecedorEntity = new FornecedorEntity();
	    this.fornecedorEntity.setId_forn(produtoDTO.getFk_id_forn());
		this.prod_nome = produtoDTO.getProd_nome();
		this.prod_descricao = produtoDTO.getProd_descricao();
		this.prod_ponto_rep = produtoDTO.getProd_ponto_rep();
		this.valor_quant = produtoDTO.getValor_quant();
		this.prod_status = produtoDTO.getProd_status();
	}
	
	public int getId_prod() {
		return id_prod;
	}
	public void setId_prod(int id_prod) {
		this.id_prod = id_prod;
	}
	public FornecedorEntity getFornecedorEntity() {
		return fornecedorEntity;
	}
	public void setFornecedorEntity(FornecedorEntity fornecedorEntity) {
		this.fornecedorEntity = fornecedorEntity;
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
	
	public ProdutoEntity setAlterarCadastro(ProdutoEntity produtoEntity, ProdutoDTO produtoDTO) {
		produtoEntity.setProd_nome(produtoDTO.getProd_nome());
		produtoEntity.setProd_descricao(produtoDTO.getProd_descricao());
		produtoEntity.setProd_ponto_rep(produtoDTO.getProd_ponto_rep());
		produtoEntity.fornecedorEntity.setId_forn(produtoDTO.getFk_id_forn());
		produtoEntity.setValor_quant(produtoDTO.getValor_quant());
		produtoEntity.setProd_status(produtoDTO.getProd_status());

		return produtoEntity;
	}

}

