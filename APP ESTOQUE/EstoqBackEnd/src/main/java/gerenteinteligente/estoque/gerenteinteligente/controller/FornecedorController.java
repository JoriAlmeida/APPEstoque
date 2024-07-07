package gerenteinteligente.estoque.gerenteinteligente.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import gerenteinteligente.estoque.gerenteinteligente.dtos.FornecedorDTO;
import gerenteinteligente.estoque.gerenteinteligente.service.FornecedorService;

@RestController
@RequestMapping("/fornecedores")
public class FornecedorController {

	
	private final FornecedorService fornecedorService;
	
	
	public FornecedorController (FornecedorService fornecedorService) {
		this.fornecedorService = fornecedorService;
	}

	@GetMapping(value = "/encontrarFornecedores")
	public List<FornecedorDTO> encontrarFornecedores() {
		return fornecedorService.encontrarFornecedores();
	}
			
		

	
}

