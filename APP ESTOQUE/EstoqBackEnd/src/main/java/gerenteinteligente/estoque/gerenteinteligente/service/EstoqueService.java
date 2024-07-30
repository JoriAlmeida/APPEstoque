package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gerenteinteligente.estoque.gerenteinteligente.dtos.EstoqueDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.EstoqueEntity;
import gerenteinteligente.estoque.gerenteinteligente.repository.EstoqueRepository;


@Service
public class EstoqueService {

	@Autowired
	private EstoqueRepository estoqueRepository;
	
	public List<EstoqueDTO> encontrarEstoque(){
		List<EstoqueEntity> estoquesEntity = estoqueRepository.findAll();
		List<EstoqueDTO> estoquesDTO = new ArrayList<>();
		for (EstoqueEntity estoqueEntity : estoquesEntity) {
			estoquesDTO.add(new EstoqueDTO(estoqueEntity));
		}
		return estoquesDTO;
	}
	
}
