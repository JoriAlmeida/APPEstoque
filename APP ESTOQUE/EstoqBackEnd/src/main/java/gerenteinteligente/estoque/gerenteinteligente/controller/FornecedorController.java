package gerenteinteligente.estoque.gerenteinteligente.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import gerenteinteligente.estoque.gerenteinteligente.dtos.FornecedorDTO;
import gerenteinteligente.estoque.gerenteinteligente.dtos.ProdutoDTO;
import gerenteinteligente.estoque.gerenteinteligente.service.FornecedorService;

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController {

	
	private final FornecedorService fornecedorService;
	
	
	public FornecedorController (FornecedorService fornecedorService) {
		this.fornecedorService = fornecedorService;
	}
	
	@GetMapping(value = "/encontrarFornecedorId/{id}")
	public FornecedorDTO findById(@PathVariable int id) {
		return fornecedorService.findById(id);
	}


	@GetMapping(value = "/encontrarFornecedores")
	public List<FornecedorDTO> encontrarFornecedores() {
		return fornecedorService.encontrarFornecedores();
	}
			
		
	@PostMapping(value = "/cadastrarFornecedor")
	public ResponseEntity<String> cadastrarFornecedor(@RequestBody(required = false) FornecedorDTO fornecedorDTO) {
		return fornecedorService.cadastrarFornecedor(fornecedorDTO);
	}
	
	@PutMapping(value = "/editarFornecedor/{id}")
	public void alterarFornecedor(@PathVariable int id, @RequestBody FornecedorDTO fornecedorDTO) {
		fornecedorService.alterarFornecedor(id, fornecedorDTO);
	}
	
}

