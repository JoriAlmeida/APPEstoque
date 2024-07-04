package service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dtos.ProdutoDTO;
import entity.ProdutoEntity;
import repository.ProdutoRepository;

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
