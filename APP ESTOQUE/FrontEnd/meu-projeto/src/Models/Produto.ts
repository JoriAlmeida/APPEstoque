export interface Produto{
    id_prod: number,
    fk_id_forn: number,
    prod_nome: string,
    prod_descricao: string,   
    prod_ponto_rep: number,
    valor_quant: number,
    prod_status: string,
}