package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.FornecedorEntity;
@Repository
public interface FornecedorRepository extends JpaRepository<FornecedorEntity, Integer>{

}
