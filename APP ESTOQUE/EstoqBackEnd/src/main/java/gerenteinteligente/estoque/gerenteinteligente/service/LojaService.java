package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import gerenteinteligente.estoque.gerenteinteligente.dtos.LojaDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.LojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.repository.LojaRepository;

@Service
public class LojaService {

	@Autowired
	private LojaRepository lojaRepository;
	
	public List<LojaDTO> encontrarLojas(){
		List<LojaEntity> lojasEntity = lojaRepository.findAll();
		List<LojaDTO> lojasDTO = new ArrayList<>();
		for(LojaEntity lojaEntity : lojasEntity) {
			lojasDTO.add(new LojaDTO(lojaEntity));
		}
		return lojasDTO;
	}

	
	
}
