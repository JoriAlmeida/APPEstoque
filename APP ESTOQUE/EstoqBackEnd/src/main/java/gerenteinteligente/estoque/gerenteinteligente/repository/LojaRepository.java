package gerenteinteligente.estoque.gerenteinteligente.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gerenteinteligente.estoque.gerenteinteligente.entity.LojaEntity;

@Repository
public interface LojaRepository extends JpaRepository<LojaEntity, Integer>{

}
