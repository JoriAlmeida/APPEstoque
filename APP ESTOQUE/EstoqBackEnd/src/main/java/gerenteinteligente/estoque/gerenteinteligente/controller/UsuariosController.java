package gerenteinteligente.estoque.gerenteinteligente.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import gerenteinteligente.estoque.gerenteinteligente.dtos.UsuariosDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.UsuariosEntity;
import gerenteinteligente.estoque.gerenteinteligente.service.UsuariosService;


@RestController
@RequestMapping("usuario")
public class UsuariosController {
	
	private final UsuariosService usuariosService;
	
	public UsuariosController (UsuariosService usuariosService) {
		this.usuariosService = usuariosService;
	}
	
	
	
	@GetMapping(value = "/encontrarusuarios")
	public List<UsuariosDTO> encontrarUsuarios() {
		return usuariosService.encontrarUsuarios();
	}
	
	@GetMapping(value = "/verificarlogin/{email}/{usu_senha}")
	public ResponseEntity<String> verificarlogin(@PathVariable String email, @PathVariable String usu_senha) {
		return usuariosService.verificarlogin(email, usu_senha);
	}

	@GetMapping(value = "/encontrarUsuarioId/{id}")
	public UsuariosDTO findById(@PathVariable int id) {
		return usuariosService.findById(id);
	}
	
	@GetMapping(value = "/encontrarEmail/{email}")
	public UsuariosDTO findByEmail(@PathVariable String email) {
		return usuariosService.findByEmail(email);
	}
	
}
