package controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dtos.ProdutoDTO;
import service.ProdutoService;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {
	
	private final ProdutoService produtoService;
	
	public ProdutoController (ProdutoService produtoService) {
		this.produtoService = produtoService;
	}

	@GetMapping(value = "/encontrartodos")
	public List<ProdutoDTO> encontrarProdutos() {
		return produtoService.encontrarProdutos();
	}

	

}
