package gerenteinteligente.estoque.gerenteinteligente.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gerenteinteligente.estoque.gerenteinteligente.entity.LojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.MovimentacaoLojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;

@Repository
public interface MovimentacaoLojaRepository extends JpaRepository<MovimentacaoLojaEntity, Integer> {

	List<MovimentacaoLojaEntity> findByLojaEntityLoja(int loja);


	MovimentacaoLojaEntity findByProdutoEntityProduto(int produto);

	Optional<MovimentacaoLojaEntity> findByProdutoEntityAndLojaEntity(ProdutoEntity produtoEntity, LojaEntity lojaEntity);
	
}
