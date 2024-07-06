package controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dtos.UsuariosDTO;
import service.UsuariosService;

@RestController
@RequestMapping("usuario")
public class UsuariosController {
	
	private final UsuariosService usuariosService;
	
	public UsuariosController (UsuariosService usuariosService) {
		this.usuariosService = usuariosService;
	}
	
	
	@GetMapping(value = "/encontrarUsuarios")
	public List<UsuariosDTO> encontrarUsuarios(){
		return usuariosService.encontrarUsuarios();
	}


}
