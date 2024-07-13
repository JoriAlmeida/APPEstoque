package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import gerenteinteligente.estoque.gerenteinteligente.dtos.UsuariosDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.UsuariosEntity;
import gerenteinteligente.estoque.gerenteinteligente.repository.UsuariosRepository;


@Service
public class UsuariosService {
	
	@Autowired
	private UsuariosRepository usuariosRepository;
	
	
	public List<UsuariosDTO> encontrarUsuarios(){
		List<UsuariosEntity> usuarioEntity = usuariosRepository.findAll();
		List<UsuariosDTO> usuarioDTO = new ArrayList<>();
		for(UsuariosEntity usuariosEntity : usuarioEntity) {
			usuarioDTO.add(new UsuariosDTO(usuariosEntity));
		}
		return usuarioDTO;
	}
	
	

	public ResponseEntity<String> verificarlogin(String email, String usu_senha) {

		UsuariosEntity usuariosEntity = usuariosRepository.findByEmail(email.toLowerCase());

		if (usuariosEntity == null) {
			return new ResponseEntity<>("Usuario não cadastrado", HttpStatus.NOT_FOUND);
		}

		if ((usu_senha).equals(usuariosEntity.getUsu_senha())) {
			return new ResponseEntity<>("Login realizado com sucesso!", HttpStatus.OK);
		}

		return new ResponseEntity<>("Login realizado com sucesso!", HttpStatus.OK);
	}

	//Converte lista para DTO
	private UsuariosDTO converterLista(UsuariosEntity usuariosEntity) {
		UsuariosDTO usuariosDTO = new UsuariosDTO(usuariosEntity.getId_usuario(), usuariosEntity.getUsu_permissao(), usuariosEntity.getUsu_nome(),usuariosEntity.getUsu_cpf(),usuariosEntity.getEmail(), usuariosEntity.getUsu_senha());

		return usuariosDTO;
	}
	
	

}
