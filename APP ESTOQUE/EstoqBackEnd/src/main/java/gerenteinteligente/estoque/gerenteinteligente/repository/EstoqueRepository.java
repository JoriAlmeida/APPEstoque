package gerenteinteligente.estoque.gerenteinteligente.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gerenteinteligente.estoque.gerenteinteligente.entity.EstoqueEntity;


public interface EstoqueRepository extends JpaRepository<EstoqueEntity, Integer>{

}
