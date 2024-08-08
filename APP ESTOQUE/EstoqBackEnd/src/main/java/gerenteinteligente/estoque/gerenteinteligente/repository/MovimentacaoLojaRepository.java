package gerenteinteligente.estoque.gerenteinteligente.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gerenteinteligente.estoque.gerenteinteligente.entity.EstoqueEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.LojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.MovimentacaoLojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.UsuariosEntity;

@Repository
public interface MovimentacaoLojaRepository extends JpaRepository<MovimentacaoLojaEntity, Integer> {

	List<MovimentacaoLojaEntity> findByLojaEntityLoja(int loja);


	MovimentacaoLojaEntity findByProdutoEntityProduto(int produto);

}
