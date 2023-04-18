import Items from "../Items/Items";
import { DivCarrinho, CarrinhoDF, H3, ValorTotal, FinalizarBotao, TituloCar, CL } from "./cartStyle";
export default function Cart({addC, deleteProduto,cartTotal, fechaC}){  
    return(
        <DivCarrinho>
            <CarrinhoDF>
                <TituloCar>Carrinho</TituloCar>
                <ValorTotal> <p>Valor Total</p> <u><h3>R$ {cartTotal.toFixed(2)}</h3></u> <FinalizarBotao onClick={()=> fechaC()}>FINALIZAR COMPRA</FinalizarBotao> </ValorTotal>
            </CarrinhoDF>
            <CL>
                {addC.map((produto)=>{
                    return( <Items key={produto.id} produto={produto} deleteProduto={deleteProduto}/>)
                })}
                <>
                {addC.length === 0 && <H3>O Carrinho está vazio</H3>}
                </>
            </CL>
        </DivCarrinho>
    )
}