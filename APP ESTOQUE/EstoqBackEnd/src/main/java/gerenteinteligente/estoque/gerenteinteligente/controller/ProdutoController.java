package gerenteinteligente.estoque.gerenteinteligente.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gerenteinteligente.estoque.gerenteinteligente.dtos.ProdutoDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;
import gerenteinteligente.estoque.gerenteinteligente.service.ProdutoService;


@RestController
@RequestMapping("/produtos")
public class ProdutoController {
	
	private final ProdutoService produtoService;
	
	public ProdutoController (ProdutoService produtoService) {
		this.produtoService = produtoService;
	}

	@GetMapping(value = "/encontrarProdutos")
	public List<ProdutoDTO> encontrarProdutos() {
		return produtoService.encontrarProdutos();
	}

    @PostMapping(value = "/cadastrarProdutos")
    public ResponseEntity<ProdutoEntity> salvarProduto(@RequestBody ProdutoEntity produto) {
        ProdutoEntity produtoSalvo = produtoService.salvarProduto(produto);
        return new ResponseEntity<>(produtoSalvo, HttpStatus.CREATED);
    }
	


}
