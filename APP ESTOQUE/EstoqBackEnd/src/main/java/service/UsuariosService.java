package service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dtos.UsuariosDTO;
import entity.UsuariosEntity;
import repository.UsuariosRepository;

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
	

}
