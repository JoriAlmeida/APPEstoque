package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import gerenteinteligente.estoque.gerenteinteligente.dtos.ProdutoDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.FornecedorEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;
import gerenteinteligente.estoque.gerenteinteligente.repository.FornecedorRepository;
import gerenteinteligente.estoque.gerenteinteligente.repository.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private FornecedorRepository fornecedorRepository; //

	public ProdutoDTO findById(int id) {
		ProdutoEntity produtoEntity = produtoRepository.findById(id).get();
		ProdutoDTO dto = new ProdutoDTO(produtoEntity);
		return dto;
	}

	public List<ProdutoDTO> encontrarProdutos() {
		List<ProdutoEntity> produtosEntity = produtoRepository.findAll();
		List<ProdutoDTO> produtosDTO = new ArrayList<>();
		for (ProdutoEntity produtoEntity : produtosEntity) {
			produtosDTO.add(new ProdutoDTO(produtoEntity));
		}
		return produtosDTO;
	}

	public ProdutoEntity salvarProduto(ProdutoEntity produto) {
		Optional<ProdutoEntity> produtoExistente = produtoRepository.findByProdnome(produto.getProdnome());

		if (produtoExistente.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Produto com este nome já existe.");
		}

		FornecedorEntity fornecedor = fornecedorRepository.findById(produto.getFornecedorEntity().getId_forn())
				.orElse(null);
		if (fornecedor != null) {
			produto.setFornecedorEntity(fornecedor);
		}

		return produtoRepository.save(produto);
	}

	public ProdutoDTO alterarProduto(int id, ProdutoDTO produtoDTO) {
		ProdutoEntity produtoEntity = produtoRepository.findById(id).orElse(null);

		Optional<ProdutoEntity> produtoComMesmoNome = produtoRepository.findByProdnome(produtoDTO.getProdnome());
		if (produtoComMesmoNome.isPresent() && produtoComMesmoNome.get().getProduto() != id) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Produto com este nome já existe.");
		}

		if (produtoEntity != null) {
			FornecedorEntity fornecedor = fornecedorRepository.findById(produtoDTO.getFkidforn()).orElse(null);

			if (fornecedor != null) {
				produtoEntity.setFornecedorEntity(fornecedor);
			}

			produtoEntity.setProdnome(produtoDTO.getProdnome());
			produtoEntity.setProddescricao(produtoDTO.getProddescricao());
			produtoEntity.setProdpontorep(produtoDTO.getProdpontorep());
			produtoEntity.setProdvalor(produtoDTO.getProdvalor());
			produtoEntity.setProdstatus(produtoDTO.getProdstatus());

			produtoRepository.save(produtoEntity);
		}

		return findById(id);
	}

	public ProdutoDTO alterarStatus(int id) {
		ProdutoEntity produtoEntity = produtoRepository.getReferenceById(id);
		String checkStatus = produtoEntity.getProdstatus();

		if (checkStatus.equals("Ativo")) {
			produtoEntity.setProdstatus("Desativado");

		} else {
			produtoEntity.setProdstatus("Ativo");
		}

		produtoRepository.save(produtoEntity);
		return converterProdutoDTO(produtoEntity);

	}

	private ProdutoDTO converterProdutoDTO(ProdutoEntity produtoEntity) {
		ProdutoDTO produtoDTO = new ProdutoDTO();
		produtoDTO.setProduto(produtoEntity.getProduto());
		produtoDTO.setFkidforn(produtoEntity.getFornecedorEntity().getId_forn());
		produtoDTO.setProdnome(produtoEntity.getProdnome());
		produtoDTO.setProddescricao(produtoEntity.getProddescricao());
		produtoDTO.setProdpontorep(produtoEntity.getProdpontorep());
		produtoDTO.setProdvalor(produtoEntity.getProdvalor());
		produtoDTO.setProdstatus(produtoEntity.getProdstatus());
		return produtoDTO;
	}

}