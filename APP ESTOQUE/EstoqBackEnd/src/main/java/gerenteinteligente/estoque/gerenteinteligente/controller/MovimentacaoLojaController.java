package gerenteinteligente.estoque.gerenteinteligente.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import gerenteinteligente.estoque.gerenteinteligente.dtos.MovimentacaoLojaDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.LojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.MovimentacaoLojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;
import gerenteinteligente.estoque.gerenteinteligente.service.MovimentacaoLojaService;

@RestController
@RequestMapping("/movimentacaoLoja")
public class MovimentacaoLojaController {

	private final MovimentacaoLojaService movimentacaoLojaService;

	public MovimentacaoLojaController(MovimentacaoLojaService movimentacaoLojaService) {
		this.movimentacaoLojaService = movimentacaoLojaService;
	}

	@GetMapping(value = "/encontrarMovimentacaoLojaId/{id}")
	public MovimentacaoLojaDTO findById(@PathVariable int id) {
		return movimentacaoLojaService.findById(id);
	}

	@GetMapping(value = "/encontrarMovimentacaoLoja")
	public List<MovimentacaoLojaDTO> encontrarMovimentacaoLoja() {
		return movimentacaoLojaService.encontrarMovimentacaoLojas();
	}

	
	
    @GetMapping(value = "/encontrarMovimentacaoLojaPorLoja/{fkIdLoja}")
    public List<MovimentacaoLojaDTO> encontrarMovimentacaoLojaPorLoja(@PathVariable int fkIdLoja) {
        return movimentacaoLojaService.encontrarMovimentacaoLojasPorLoja(fkIdLoja);
    }
    
    @PostMapping("/cadastrarMovimentacao")
    public ResponseEntity<MovimentacaoLojaDTO> cadastrarMovimentacaoLoja(@RequestBody MovimentacaoLojaDTO movimentacaoLojaDTO) {
        try {
            MovimentacaoLojaDTO novaMovimentacao = movimentacaoLojaService.cadastrarMovimentacaoLoja(movimentacaoLojaDTO);
            return ResponseEntity.ok(novaMovimentacao);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    
    }
    
    @PostMapping("/transferir")
    public ResponseEntity<MovimentacaoLojaDTO> transferirEstoque(
            @RequestParam int fkidprod,
            @RequestParam int origem,
            @RequestParam int fkidloja,
            @RequestParam int movqtde) {

        MovimentacaoLojaDTO movimentacaoLojaDTO = movimentacaoLojaService.transferirEstoque(fkidprod, origem, fkidloja, movqtde);
        return ResponseEntity.ok(movimentacaoLojaDTO);
    }
	
}
