package gerenteinteligente.estoque.gerenteinteligente.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gerenteinteligente.estoque.gerenteinteligente.dtos.EstoqueDTO;
import gerenteinteligente.estoque.gerenteinteligente.service.EstoqueService;

@RestController
@RequestMapping("/estoque")
public class EstoqueController {

    private final EstoqueService estoqueService;

    public EstoqueController(EstoqueService estoqueService) {
        this.estoqueService = estoqueService;
    }

    @GetMapping(value = "/encontrarEstoque")
    public List<EstoqueDTO> encontrarEstoque() {
        return estoqueService.encontrarEstoque();
    }

    @PostMapping("/cadastrarEstoque")
    public EstoqueDTO cadastrarEstoque(@RequestBody EstoqueDTO estoqueDTO) {
        return estoqueService.cadastrarEstoque(estoqueDTO);
    }
}