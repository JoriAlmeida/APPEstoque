package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import gerenteinteligente.estoque.gerenteinteligente.dtos.FornecedorDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.FornecedorEntity;
import gerenteinteligente.estoque.gerenteinteligente.repository.FornecedorRepository;



@Service
public class FornecedorService {

	
	@Autowired
	private FornecedorRepository fornecedorRepository;
	
	public FornecedorDTO findById(int id) {
		FornecedorEntity fornecedorEntity = fornecedorRepository.findById(id).get();
		FornecedorDTO fornecedorDTO = new FornecedorDTO(fornecedorEntity);
		return fornecedorDTO;
	}

	public List<FornecedorDTO> encontrarFornecedores(){
		List<FornecedorEntity> fornecedoresEntity = fornecedorRepository.findAll();
		List<FornecedorDTO> fornecedoresDTO = new ArrayList<>();
		for (FornecedorEntity fornecedorEntity : fornecedoresEntity) {
			fornecedoresDTO.add(new FornecedorDTO(fornecedorEntity));
		}
		return fornecedoresDTO;
	}
	
	
	public ResponseEntity<String> cadastrarFornecedor(FornecedorDTO fornecedorDTO) {
		fornecedorRepository.save(new FornecedorEntity(fornecedorDTO));
		return new ResponseEntity<>("Novo fornecedor cadastrado.", HttpStatus.CREATED);
	}
	
	public FornecedorDTO alterarFornecedor(int id, FornecedorDTO fornecedorDTO) {
		FornecedorEntity fornecedorEntity = fornecedorRepository.getReferenceById(id);
		fornecedorEntity.alterarFornecedor(fornecedorEntity, fornecedorDTO);
		fornecedorRepository.save(fornecedorEntity);
		FornecedorDTO userDTOResponse = findById(id);
		return userDTOResponse;
	}
	
	
}