package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gerenteinteligente.estoque.gerenteinteligente.dtos.EstoqueDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.EstoqueEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.LojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.MovimentacaoLojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;
import gerenteinteligente.estoque.gerenteinteligente.repository.EstoqueRepository;
import gerenteinteligente.estoque.gerenteinteligente.repository.LojaRepository;
import gerenteinteligente.estoque.gerenteinteligente.repository.ProdutoRepository;
import jakarta.transaction.Transactional;
import gerenteinteligente.estoque.gerenteinteligente.repository.MovimentacaoLojaRepository;


@Service
public class EstoqueService {

    @Autowired
    private EstoqueRepository estoqueRepository;

    @Autowired
    private ProdutoRepository produtoRepository;
    
    @Autowired
    private LojaRepository lojaRepository;
    
    @Autowired
    private MovimentacaoLojaRepository movimentacaoLojaRepository;
    
    
    public EstoqueService(EstoqueRepository estoqueRepository, ProdutoRepository produtoRepository, MovimentacaoLojaRepository movimentacaoLojaRepository) {
        this.estoqueRepository = estoqueRepository;
        this.produtoRepository = produtoRepository;
        this.movimentacaoLojaRepository = movimentacaoLojaRepository;
    }
    
    
    public List<EstoqueDTO> encontrarEstoque() {
        List<EstoqueEntity> estoquesEntity = estoqueRepository.findAll();
        List<EstoqueDTO> estoquesDTO = new ArrayList<>();
        for (EstoqueEntity estoqueEntity : estoquesEntity) {
            estoquesDTO.add(new EstoqueDTO(estoqueEntity));
        }
        return estoquesDTO;
    }

    /*
    public EstoqueDTO cadastrarEstoque(EstoqueDTO estoqueDTO) {
        ProdutoEntity produtoEntity = produtoRepository.findById(estoqueDTO.getEstoqueidprod())
                                                       .orElseThrow(() -> new IllegalArgumentException("Produto não encontrado"));
        
        EstoqueEntity estoqueEntity = estoqueRepository.findByProdutoEntityProduto(estoqueDTO.getEstoqueidprod());

        if (estoqueDTO.getEstoquetipo() == 1 || estoqueDTO.getEstoquetipo() == 2 || estoqueDTO.getEstoquetipo() == 3) {
            if (estoqueEntity != null) {
                estoqueEntity.setEstoqueqtd(estoqueEntity.getEstoqueqtd() + estoqueDTO.getEstoqueqtd());
            } else {
                estoqueEntity = new EstoqueEntity(estoqueDTO);
                estoqueEntity.setProdutoEntity(produtoEntity);
            }
            estoqueEntity.setEstoquevalor(produtoEntity.getValor_quant());
        } else if (estoqueDTO.getEstoquetipo() == 4 || estoqueDTO.getEstoquetipo() == 5 || estoqueDTO.getEstoquetipo() == 6) {
            if (estoqueEntity != null && estoqueEntity.getEstoqueqtd() >= estoqueDTO.getEstoqueqtd()) {
                estoqueEntity.setEstoqueqtd(estoqueEntity.getEstoqueqtd() - estoqueDTO.getEstoqueqtd());
            } else {
                throw new IllegalArgumentException("Quantidade insuficiente");
            }
        } else {
            throw new IllegalArgumentException("Tipo de estoque inválido");
        }

        estoqueEntity = estoqueRepository.save(estoqueEntity);
        return new EstoqueDTO(estoqueEntity);
    }
      
    public EstoqueDTO cadastrarEstoque(EstoqueDTO estoqueDTO) {
        ProdutoEntity produtoEntity = produtoRepository.findById(estoqueDTO.getEstoqueidprod())
                                                       .orElseThrow(() -> new IllegalArgumentException("Produto não encontrado"));
        
        EstoqueEntity estoqueEntity = estoqueRepository.findByProdutoEntityProduto(estoqueDTO.getEstoqueidprod());

        if (estoqueDTO.getEstoquetipo() == 1 || estoqueDTO.getEstoquetipo() == 2 || estoqueDTO.getEstoquetipo() == 3) {
            if (estoqueEntity != null) {
                estoqueEntity.setEstoqueqtd(estoqueEntity.getEstoqueqtd() + estoqueDTO.getEstoqueqtd());
            } else {
                estoqueEntity = new EstoqueEntity(estoqueDTO);
                estoqueEntity.setProdutoEntity(produtoEntity);
            }
            estoqueEntity.setEstoquevalor(produtoEntity.getValor_quant());
        } else if (estoqueDTO.getEstoquetipo() == 4 || estoqueDTO.getEstoquetipo() == 5 || estoqueDTO.getEstoquetipo() == 6) {
            if (estoqueEntity != null && estoqueEntity.getEstoqueqtd() >= estoqueDTO.getEstoqueqtd()) {
                estoqueEntity.setEstoqueqtd(estoqueEntity.getEstoqueqtd() - estoqueDTO.getEstoqueqtd());

                // Lógica para transferir para MovimentacaoLoja
                MovimentacaoLojaEntity movimentacaoLojaEntity = new MovimentacaoLojaEntity();
                movimentacaoLojaEntity.setLojaEntity(null); // Defina a loja correta aqui
                movimentacaoLojaEntity.setProdutoEntity(produtoEntity);
                movimentacaoLojaEntity.setMov_tipo(estoqueDTO.getEstoquetipo());
                movimentacaoLojaEntity.setMov_qtde(estoqueDTO.getEstoqueqtd());
                movimentacaoLojaEntity.setMov_valor(estoqueDTO.getEstoquevalor());
                movimentacaoLojaEntity.setMov_ponto_rep(0); // Ajuste conforme necessário

                movimentacaoLojaRepository.save(movimentacaoLojaEntity);
            } else {
                throw new IllegalArgumentException("Quantidade insuficiente");
            }
        } else {
            throw new IllegalArgumentException("Tipo de estoque inválido");
        }

        estoqueEntity = estoqueRepository.save(estoqueEntity);
        return new EstoqueDTO(estoqueEntity);
    }
    */
    
    
    
    @Transactional
    public EstoqueDTO cadastrarEstoque(EstoqueDTO estoqueDTO) {
        ProdutoEntity produtoEntity = produtoRepository.findById(estoqueDTO.getEstoqueidprod())
                                                       .orElseThrow(() -> new IllegalArgumentException("Produto não encontrado"));

        EstoqueEntity estoqueEntity = estoqueRepository.findByProdutoEntityProduto(estoqueDTO.getEstoqueidprod());

        // Lógica para tipos de movimentação 1, 2 e 3
        if (estoqueDTO.getEstoquetipo() == 1 || estoqueDTO.getEstoquetipo() == 2 || estoqueDTO.getEstoquetipo() == 3) {
            if (estoqueDTO.getEstoquetransferencia() != 0) {
                throw new IllegalArgumentException("Não é permitido cadastrar com ESTOQUETRANSFERENCIA diferente de 0 para tipos 1, 2 e 3.");
            }
            
            if (estoqueEntity != null) {
                estoqueEntity.setEstoqueqtd(estoqueEntity.getEstoqueqtd() + estoqueDTO.getEstoqueqtd());
            } else {
                estoqueEntity = new EstoqueEntity(estoqueDTO);
                estoqueEntity.setProdutoEntity(produtoEntity);
            }
            estoqueEntity.setEstoquevalor(produtoEntity.getProdvalor());

        // Lógica para tipos de movimentação 4, 5 e 6
        } else if (estoqueDTO.getEstoquetipo() == 4 || estoqueDTO.getEstoquetipo() == 5 || estoqueDTO.getEstoquetipo() == 6) {
            if (estoqueEntity != null && estoqueEntity.getEstoqueqtd() >= estoqueDTO.getEstoqueqtd()) {
                estoqueEntity.setEstoqueqtd(estoqueEntity.getEstoqueqtd() - estoqueDTO.getEstoqueqtd());

                // Lógica para transferir para MovimentacaoLoja
                MovimentacaoLojaEntity movimentacaoLojaEntity = new MovimentacaoLojaEntity();
                movimentacaoLojaEntity.setProdutoEntity(produtoEntity);
                movimentacaoLojaEntity.setMov_tipo(estoqueDTO.getEstoquetipo());
                movimentacaoLojaEntity.setMov_qtde(estoqueDTO.getEstoqueqtd());

                if (estoqueDTO.getEstoquetransferencia() != 0) {
                    LojaEntity lojaEntity = lojaRepository.findById(estoqueDTO.getEstoquetransferencia())
                                                           .orElseThrow(() -> new IllegalArgumentException("Loja não encontrada"));
                    movimentacaoLojaEntity.setLojaEntity(lojaEntity);
                }

                movimentacaoLojaRepository.save(movimentacaoLojaEntity);
            } else {
                throw new IllegalArgumentException("Quantidade insuficiente");
            }
        } else {
            throw new IllegalArgumentException("Tipo de estoque inválido");
        }

        estoqueEntity = estoqueRepository.save(estoqueEntity);
        return new EstoqueDTO(estoqueEntity);
    }
    
    
    
    
}