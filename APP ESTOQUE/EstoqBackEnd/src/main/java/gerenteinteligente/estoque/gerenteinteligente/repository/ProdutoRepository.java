package gerenteinteligente.estoque.gerenteinteligente.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;



@Repository
public interface ProdutoRepository extends JpaRepository<ProdutoEntity, Integer>{

}	