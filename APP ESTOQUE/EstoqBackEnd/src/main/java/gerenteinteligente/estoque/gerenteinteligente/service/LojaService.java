package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import gerenteinteligente.estoque.gerenteinteligente.dtos.FornecedorDTO;
import gerenteinteligente.estoque.gerenteinteligente.dtos.LojaDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.FornecedorEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.LojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.repository.LojaRepository;

@Service
public class LojaService {

	@Autowired
	private LojaRepository lojaRepository;
	
	
	public LojaDTO findById(int id) {
		LojaEntity LojaEntity = lojaRepository.findById(id).get();
		LojaDTO Loja = new LojaDTO(LojaEntity);
		return Loja;
	}
	
	
	public List<LojaDTO> encontrarLojas(){
		List<LojaEntity> lojasEntity = lojaRepository.findAll();
		List<LojaDTO> lojasDTO = new ArrayList<>();
		for(LojaEntity lojaEntity : lojasEntity) {
			lojasDTO.add(new LojaDTO(lojaEntity));
		}
		return lojasDTO;
	}

	public ResponseEntity<String> cadastrarLoja(LojaDTO lojaDTO) {
		lojaRepository.save(new LojaEntity(lojaDTO));
		return new ResponseEntity<>("Nova loja cadastrada.", HttpStatus.CREATED);
	}
	
	
}
