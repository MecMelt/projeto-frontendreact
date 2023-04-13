import { Produtos } from "../../assents/ListaProdutos";
import ProductCard from "../ProductCard/Produtos";
import { PrimeiroConteiner, SelecionarPai, SelecionarFilho, SegundoCointeiner, H3 } from "./homeStyle";
export default function Home({Produtos, procurar, order, setOrdens, addCart,setAddCart, adicionarLoja, minValue, maxValue}){
    const Ordens = (e) =>{
        setOrdens(e.target.value)
    };
    console.log(Ordens)
    return(
        <PrimeiroConteiner>
            <SelecionarPai>
                <H3>Quantidade de produtos: {Produtos.length}</H3>
                <SelecionarFilho  onChange={Ordens} value={order}> <option value="">Ordenar por nome</option> <option value="crescente">Crescente</option> <option value="decrescente">Decrescente</option>
                </SelecionarFilho>
                <SelecionarFilho  onChange={Ordens} value={order}> <option value="">Ordenar por preço</option> <option value="maior">Maior preço</option> <option value="menor">Menor preço</option>
                </SelecionarFilho>
            </SelecionarPai>
            <SegundoCointeiner>
                {Produtos.filter((produto)=>{
                    return produto.name.toLowerCase().includes(procurar.toLowerCase())
                }).filter((produto) => 
                    produto.value > Number(minValue)
                ).filter((produto) =>
                    produto.value < Number(maxValue)
                ).sort((a,b)=> order === "" || order === "crescente" &&
                a.name > b.name ? 1 : -1                    
                ).sort((a,b) => order === "decrescente" && 
                a.name > b.name ? -1 : 1
                ).sort((a,b) => {
                    if(order === "maior"){
                        return b.value - a.value
                    }
                    if(order === "menor"){
                        return a.value - b.value
                    }
                }
                ).map((produto)=>{
                    return(
                        <ProductCard key={Produtos.id} produto={produto} addCart={addCart} setAddCart={setAddCart} adicionarLoja={adicionarLoja} />)
                })
                }
            </SegundoCointeiner>
        </PrimeiroConteiner>
    )
}