package gerenteinteligente.estoque.gerenteinteligente.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gerenteinteligente.estoque.gerenteinteligente.entity.UsuariosEntity;



@Repository
public interface UsuariosRepository extends JpaRepository<UsuariosEntity, Integer> {
	 
	UsuariosEntity findByEmail(String email);
	

}

