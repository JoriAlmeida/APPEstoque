package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;

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
	
	
	public UsuariosDTO findById(int id_usuario) {
		UsuariosEntity usuariosEntity = usuariosRepository.findById(id_usuario).get();

		if (usuariosEntity == null) {
			return null;
		}

		UsuariosDTO usuariosDTO = new UsuariosDTO(usuariosEntity);

		return usuariosDTO;
	}

	
	
	/*
	public ResponseEntity<String> VerificarLogin(String usu_email, String usu_senha) {
		UsuariosEntity usuariosEntity = usuariosRepository.findByEmail(usu_email);

		if (usuariosEntity == null) {
			return new ResponseEntity<>("The informed customer [" + usu_email + "] does not exist.", HttpStatus.NOT_FOUND);
		}

		if ((usu_senha).equals(usuariosEntity.getUsu_senha())) {
			return new ResponseEntity<>("E-mail and password do not match.", HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(String.valueOf(usuariosEntity.getId_usuario()), HttpStatus.OK);
	}
	*/
	


}
