import { ConteinerItens, BotaoRemover, H3 } from "./itemsStyle"
export default function Items({produto, deleteProduto}){
    return(
        <ConteinerItens>        
            <div>{produto.image}</div>
            <div>
                <H3>R${produto.value.toFixed(2)* produto.amount.toFixed(2)}</H3>
                <H3>Quantidade: {produto.amount}</H3>
                <BotaoRemover onClick={()=> deleteProduto(produto)}>REMOVER</BotaoRemover> 
            </div>
        </ConteinerItens>
    )
}