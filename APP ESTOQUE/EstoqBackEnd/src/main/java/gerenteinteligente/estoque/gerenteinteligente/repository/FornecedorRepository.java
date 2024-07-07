package gerenteinteligente.estoque.gerenteinteligente.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gerenteinteligente.estoque.gerenteinteligente.entity.FornecedorEntity;


@Repository
public interface FornecedorRepository extends JpaRepository<FornecedorEntity, Integer>{

}
