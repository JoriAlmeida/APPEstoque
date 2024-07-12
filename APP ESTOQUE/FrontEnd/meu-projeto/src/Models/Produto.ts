export interface Produto{
    id_prod: number,
    fk_id_forn: number,
    prod_nome: String,
    prod_descricao: string,   
    prod_ponto_rep: number,
    valor_quant: number,
    prod_status: string,
}