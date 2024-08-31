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

	    ProdutoEntity produtoEntity = produtoRepository.findById(movimentacaoLojaDTO.getFkidprod())
	            .orElseThrow(() -> new IllegalArgumentException("Produto não encontrado"));

	    LojaEntity lojaEntity = lojaRepository.findById(movimentacaoLojaDTO.getFkidloja())
	            .orElseThrow(() -> new IllegalArgumentException("Loja não encontrada"));

	    // Usando orElse(null) para tratar o Optional
	    MovimentacaoLojaEntity movimentacaoLojaEntity = movimentacaoLojaRepository
	            .findByProdutoEntityAndLojaEntity(produtoEntity, lojaEntity)
	            .orElse(null);

	    if (movimentacaoLojaEntity != null) {
	        movimentacaoLojaEntity.setMovqtde(movimentacaoLojaEntity.getMovqtde() + movimentacaoLojaDTO.getMovqtde());
	        
	    } else {
	        movimentacaoLojaEntity = new MovimentacaoLojaEntity();
	        movimentacaoLojaEntity.setLojaEntity(lojaEntity);
	        movimentacaoLojaEntity.setProdutoEntity(produtoEntity);
	        movimentacaoLojaEntity.setMovqtde(movimentacaoLojaDTO.getMovqtde());
	        movimentacaoLojaEntity.setMovvalor(produtoEntity.getProdvalor());
	        movimentacaoLojaEntity.setMovpontorep(produtoEntity.getProdpontorep());
	    }

	    movimentacaoLojaEntity = movimentacaoLojaRepository.save(movimentacaoLojaEntity);
	    return new MovimentacaoLojaDTO(movimentacaoLojaEntity);
	}
	
	
	  @Transactional
	    public MovimentacaoLojaDTO transferirEstoque(int fkidprod, int origem, int fkidloja, int movqtde) {
	        // Verifica se as lojas existem
	        LojaEntity lojaOrigem = lojaRepository.findById(fkidloja)
	                .orElseThrow(() -> new IllegalArgumentException("Loja de origem não encontrada"));
	        LojaEntity lojaDestino = lojaRepository.findById(fkidloja)
	                .orElseThrow(() -> new IllegalArgumentException("Loja de destino não encontrada"));

	        // Verifica se o produto existe
	        ProdutoEntity produtoEntity = produtoRepository.findById(fkidprod)
	                .orElseThrow(() -> new IllegalArgumentException("Produto não encontrado"));

	        // Verifica se a loja de origem tem o produto com a quantidade suficiente
	        MovimentacaoLojaEntity movimentacaoOrigem = movimentacaoLojaRepository
	                .findByProdutoEntityAndLojaEntity(produtoEntity, lojaOrigem)
	                .orElseThrow(() -> new IllegalArgumentException("Produto não encontrado na loja de origem"));

	        if (movimentacaoOrigem.getMovqtde() < movqtde) {
	            throw new IllegalArgumentException("Quantidade insuficiente na loja de origem");
	        }

	        // Atualiza a quantidade na loja de origem
	        movimentacaoOrigem.setMovqtde(movimentacaoOrigem.getMovqtde() - movqtde);
	        movimentacaoLojaRepository.save(movimentacaoOrigem);

	        // Verifica se a loja de destino já possui o produto
	        MovimentacaoLojaEntity movimentacaoDestino = movimentacaoLojaRepository
	                .findByProdutoEntityAndLojaEntity(produtoEntity, lojaDestino)
	                .orElse(null);

	        if (movimentacaoDestino != null) {
	            // Atualiza a quantidade na loja de destino
	            movimentacaoDestino.setMovqtde(movimentacaoDestino.getMovqtde() + movqtde);
	        } else {
	            // Cadastra o produto na loja de destino
	            movimentacaoDestino = new MovimentacaoLojaEntity();
	            movimentacaoDestino.setLojaEntity(lojaDestino);
	            movimentacaoDestino.setProdutoEntity(produtoEntity);
	            movimentacaoDestino.setMovqtde(movqtde);
	            movimentacaoDestino.setMovvalor(produtoEntity.getProdvalor());
	            movimentacaoDestino.setMovpontorep(produtoEntity.getProdpontorep());
	        }

	        movimentacaoDestino = movimentacaoLojaRepository.save(movimentacaoDestino);
	        return new MovimentacaoLojaDTO(movimentacaoDestino);
	    }
	}
	
	



