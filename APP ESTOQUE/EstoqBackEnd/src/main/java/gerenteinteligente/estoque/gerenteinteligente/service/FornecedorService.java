package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gerenteinteligente.estoque.gerenteinteligente.dtos.FornecedorDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.FornecedorEntity;
import gerenteinteligente.estoque.gerenteinteligente.repository.FornecedorRepository;



@Service
public class FornecedorService {

	
	@Autowired
	private FornecedorRepository fornecedorRepository;

	public List<FornecedorDTO> encontrarFornecedores(){
		List<FornecedorEntity> fornecedoresEntity = fornecedorRepository.findAll();
		List<FornecedorDTO> fornecedoresDTO = new ArrayList<>();
		for (FornecedorEntity fornecedorEntity : fornecedoresEntity) {
			fornecedoresDTO.add(new FornecedorDTO(fornecedorEntity));
		}
		return fornecedoresDTO;
	}
}