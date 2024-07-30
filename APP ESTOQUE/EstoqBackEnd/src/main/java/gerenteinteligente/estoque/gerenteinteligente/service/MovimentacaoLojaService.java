package gerenteinteligente.estoque.gerenteinteligente.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gerenteinteligente.estoque.gerenteinteligente.dtos.MovimentacaoLojaDTO;
import gerenteinteligente.estoque.gerenteinteligente.dtos.ProdutoDTO;
import gerenteinteligente.estoque.gerenteinteligente.entity.MovimentacaoLojaEntity;
import gerenteinteligente.estoque.gerenteinteligente.entity.ProdutoEntity;
import gerenteinteligente.estoque.gerenteinteligente.repository.MovimentacaoLojaRepository;

@Service
public class MovimentacaoLojaService {

	@Autowired
	MovimentacaoLojaRepository movimentacaoLojaRepository;

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
        List<MovimentacaoLojaEntity> movimentacaoLojasEntity = movimentacaoLojaRepository.findByLojaEntityLoja(fkIdLoja);
        List<MovimentacaoLojaDTO> movimentacaoLojasDTO = new ArrayList<>();
        for (MovimentacaoLojaEntity movimentacaoLojaEntity : movimentacaoLojasEntity) {
            movimentacaoLojasDTO.add(new MovimentacaoLojaDTO(movimentacaoLojaEntity));
        }
        return movimentacaoLojasDTO;
    }
    

}
