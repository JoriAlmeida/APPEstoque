package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.ProdutoEntity;


public interface ProdutoRepository extends JpaRepository<ProdutoEntity, Integer>{

}	
