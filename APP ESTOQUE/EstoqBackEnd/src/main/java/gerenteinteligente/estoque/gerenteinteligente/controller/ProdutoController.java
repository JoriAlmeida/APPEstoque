package gerenteinteligente.estoque.gerenteinteligente.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@GetMapping(value = "/encontrarpeloid/{id}")
	public ProdutoDTO findById(@PathVariable int id) {
		return produtoService.findById(id);
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
	
	@PutMapping(value = "/alterarProduto/{id}")
	public void alterarProduto(@PathVariable int id, @RequestBody ProdutoDTO produtoDTO) {
		produtoService.alterarProduto(id, produtoDTO);
	}

	@PutMapping(value = "/status/{id}")
	public ProdutoDTO alterarStatus(@PathVariable int id) {
		return produtoService.alterarStatus(id);

	}


}
