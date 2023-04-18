import { CCartas, PR, Botaoadd } from "./ProdutosStyle"
export default function CProdutos({produto, adicionarLoja}){   
    return(
        <CCartas>
            {produto.imageUrl} <PR>{produto.name}</PR> <PR> R${produto.value.toFixed(2)}</PR>
            <Botaoadd onClick={()=> adicionarLoja(produto)}>
                ADICIONAR
            </Botaoadd>
        </CCartas>
    )
}