package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import gerenteinteligente.estoque.gerenteinteligente.dtos.EstoqueDTO;
import gerenteinteligente.estoque.gerenteinteligente.dtos.MovimentacaoLojaDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.EstoqueEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.LojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.MovimentacaoLojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;
import gerenteinteligente.estoque.gerenteinteligente.repository.MovimentacaoLojaRepository;
import gerenteinteligente.estoque.gerenteinteligente.repository.ProdutoRepository;
import jakarta.transaction.Transactional;
import gerenteinteligente.estoque.gerenteinteligente.repository.LojaRepository;

@Service
public class MovimentacaoLojaService {

	@Autowired
	MovimentacaoLojaRepository movimentacaoLojaRepository;

	@Autowired
	private LojaRepository lojaRepository;

	@Autowired
	private ProdutoRepository produtoRepository;

	public MovimentacaoLojaService(MovimentacaoLojaRepository movimentacaoLojaRepository, LojaRepository lojaRepository,
			ProdutoRepository produtoRepository) {
		this.movimentacaoLojaRepository = movimentacaoLojaRepository;
		this.lojaRepository = lojaRepository;
		this.produtoRepository = produtoRepository;
	}

	public MovimentacaoLojaDTO findById(int id) {
		MovimentacaoLojaEntity MovimentacaoLojaEntity = movimentacaoLojaRepository.findById(id).get();
		MovimentacaoLojaDTO movimentacaoLoja = new MovimentacaoLojaDTO(MovimentacaoLojaEntity);
		return movimentacaoLoja;
	}

	public List<MovimentacaoLojaDTO> encontrarMovimentacaoLojas() {
		List<MovimentacaoLojaEntity> movimentacaoLojasEntity = movimentacaoLojaRepository.findAll();
		List<MovimentacaoLojaDTO> movimentacaoLojasDTO = new ArrayList<>();
		for (MovimentacaoLojaEntity movimentacaoLojaEntity : movimentacaoLojasEntity) {
			movimentacaoLojasDTO.add(new MovimentacaoLojaDTO(movimentacaoLojaEntity));
		}
		return movimentacaoLojasDTO;
	}

	public List<MovimentacaoLojaDTO> encontrarMovimentacaoLojasPorLoja(int fkIdLoja) {
		List<MovimentacaoLojaEntity> movimentacaoLojasEntity = movimentacaoLojaRepository
				.findByLojaEntityLoja(fkIdLoja);
		List<MovimentacaoLojaDTO> movimentacaoLojasDTO = new ArrayList<>();
		for (MovimentacaoLojaEntity movimentacaoLojaEntity : movimentacaoLojasEntity) {
			movimentacaoLojasDTO.add(new MovimentacaoLojaDTO(movimentacaoLojaEntity));
		}
		return movimentacaoLojasDTO;
	}

	@Transactional
    public MovimentacaoLojaDTO cadastrarMovimentacaoLoja(MovimentacaoLojaDTO movimentacaoLojaDTO) {
        ProdutoEntity produtoEntity = produtoRepository.findById(movimentacaoLojaDTO.getFk_id_prod())
                .orElseThrow(() -> new IllegalArgumentException("Produto não encontrado"));

        LojaEntity lojaEntity = lojaRepository.findById(movimentacaoLojaDTO.getFk_id_loja())
                .orElseThrow(() -> new IllegalArgumentException("Loja não encontrada"));


        MovimentacaoLojaEntity movimentacaoLojaEntity = movimentacaoLojaRepository.findByProdutoEntityProduto(produtoEntity.getProduto());
        
        if (produtoEntity != null && lojaEntity != null) {
            movimentacaoLojaEntity.setMov_qtde(movimentacaoLojaEntity.getMov_qtde() + movimentacaoLojaDTO.getMov_qtde());
        } else {
            movimentacaoLojaEntity = new MovimentacaoLojaEntity();
            movimentacaoLojaEntity.setLojaEntity(lojaEntity);
            movimentacaoLojaEntity.setProdutoEntity(produtoEntity);
            movimentacaoLojaEntity.setMov_tipo(movimentacaoLojaDTO.getMov_tipo());
            movimentacaoLojaEntity.setMov_qtde(movimentacaoLojaDTO.getMov_qtde());
            movimentacaoLojaEntity.setMov_valor(produtoEntity.getProdvalor());
            movimentacaoLojaEntity.setMov_ponto_rep(produtoEntity.getProdpontorep());
        }

        movimentacaoLojaEntity = movimentacaoLojaRepository.save(movimentacaoLojaEntity);
        return new MovimentacaoLojaDTO(movimentacaoLojaEntity);
    }
}


