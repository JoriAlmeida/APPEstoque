package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gerenteinteligente.estoque.gerenteinteligente.dtos.ProdutoDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;
import gerenteinteligente.estoque.gerenteinteligente.repository.ProdutoRepository;



@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;

	public List<ProdutoDTO> encontrarProdutos(){
		List<ProdutoEntity> produtosEntity = produtoRepository.findAll();
		List<ProdutoDTO> produtosDTO = new ArrayList<>();
		for (ProdutoEntity produtoEntity : produtosEntity) {
			produtosDTO.add(new ProdutoDTO(produtoEntity));
		}
		return produtosDTO;
	}
	
}