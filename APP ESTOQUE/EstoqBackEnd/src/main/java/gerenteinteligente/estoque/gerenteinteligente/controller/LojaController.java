package gerenteinteligente.estoque.gerenteinteligente.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import gerenteinteligente.estoque.gerenteinteligente.dtos.LojaDTO;
import gerenteinteligente.estoque.gerenteinteligente.service.LojaService;

@RestController
@RequestMapping("loja")
public class LojaController {

	private final LojaService lojaService;
		
    public LojaController(LojaService lojaService) {
        this.lojaService = lojaService; 
    }

	
	
	@GetMapping(value = "encontrarLojas")
	public List<LojaDTO> encontrarLojas(){
		return lojaService.encontrarLojas();
	}
	
}
