package gerenteinteligente.estoque.gerenteinteligente.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gerenteinteligente.estoque.gerenteinteligente.dtos.FornecedorDTO;
import gerenteinteligente.estoque.gerenteinteligente.dtos.LojaDTO;
import gerenteinteligente.estoque.gerenteinteligente.dtos.MovimentacaoLojaDTO;
import gerenteinteligente.estoque.gerenteinteligente.dtos.ProdutoDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.FornecedorEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.LojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;
import gerenteinteligente.estoque.gerenteinteligente.service.LojaService;

@RestController
@RequestMapping("loja")
public class LojaController {

	private final LojaService lojaService;
		
    public LojaController(LojaService lojaService) {
        this.lojaService = lojaService; 
    }

	
	@GetMapping(value = "/encontrarLojaId/{id}")
	public LojaDTO findById(@PathVariable int id) {
		return lojaService.findById(id);
	}
    
	
	@GetMapping(value = "encontrarLojas")
	public List<LojaDTO> encontrarLojas(){
		return lojaService.encontrarLojas();
	}
	
	@PostMapping(value = "/cadastrarLoja")
	public ResponseEntity<String> cadastrarLoja(@RequestBody(required = false) LojaDTO lojaDTO) {
		return lojaService.cadastrarLoja(lojaDTO);
	}
	
	
	
}
