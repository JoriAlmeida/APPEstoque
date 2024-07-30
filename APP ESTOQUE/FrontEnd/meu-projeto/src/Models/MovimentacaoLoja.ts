export interface MovimentacaoLoja{
    id_mov_loja: number,
    fk_id_loja: number,
    fk_id_prod: number,
    mov_tipo: number,   
    mov_qtde: number,
    mov_valor: number,
    mov_ponto_rep: number,
    mov_valor_medio: number
}
