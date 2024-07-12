package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import gerenteinteligente.estoque.gerenteinteligente.dtos.ProdutoDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;
import gerenteinteligente.estoque.gerenteinteligente.repository.ProdutoRepository;



@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	public ProdutoDTO findById(int id) {
		ProdutoEntity produtoEntity = produtoRepository.findById(id).get();
		ProdutoDTO dto = new ProdutoDTO(produtoEntity);
		return dto;
	}

	public List<ProdutoDTO> encontrarProdutos(){
		List<ProdutoEntity> produtosEntity = produtoRepository.findAll();
		List<ProdutoDTO> produtosDTO = new ArrayList<>();
		for (ProdutoEntity produtoEntity : produtosEntity) {
			produtosDTO.add(new ProdutoDTO(produtoEntity));
		}
		return produtosDTO;
	}
	
    
    public ProdutoEntity salvarProduto(ProdutoEntity produto) {
        return produtoRepository.save(produto);
    }
    	
	public ProdutoDTO alterarProduto(int id, ProdutoDTO produtoDTO) {
		ProdutoEntity produtoEntity = produtoRepository.getReferenceById(id);
		produtoEntity.setAlterarCadastro(produtoEntity, produtoDTO);
		produtoRepository.save(produtoEntity);
		ProdutoDTO userDTOResponse = findById(id);
		return userDTOResponse;
	}
	
    
	public ProdutoDTO alterarStatus(int id) {
		ProdutoEntity produtoEntity = produtoRepository.getReferenceById(id);
		String checkStatus = produtoEntity.getProd_status();

		if (checkStatus.equals("ativo")) {
			produtoEntity.setProd_status("inativo");

		} else {
			produtoEntity.setProd_status("ativo");
		}

		produtoRepository.save(produtoEntity);
		return converterProdutoDTO(produtoEntity);

	}
	
	
	private ProdutoDTO converterProdutoDTO(ProdutoEntity produtoEntity) {
		ProdutoDTO produtoDTO = new ProdutoDTO();
		produtoDTO.setId_prod(produtoEntity.getId_prod());
		produtoDTO.setFk_id_forn(produtoEntity.getFornecedorEntity().getId_forn());
		produtoDTO.setProd_nome(produtoEntity.getProd_nome());
		produtoDTO.setProd_descricao(produtoEntity.getProd_descricao());
		produtoDTO.setProd_ponto_rep(produtoEntity.getProd_ponto_rep());
		produtoDTO.setValor_quant(produtoEntity.getValor_quant());
		produtoDTO.setProd_status(produtoEntity.getProd_status());
		return produtoDTO;
	}

    
	
}