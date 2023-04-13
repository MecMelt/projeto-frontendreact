import Filtros from "./Components/Filters/Filtros";
import Header from "./Components/Header/Header";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { GlobalStyle } from "./GlobalStyle";
import {Produtos} from "./Components/assents/ListaProdutos"
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
function App() { 
  const [ procurar, setProcurar] = useState("");
  const [ order, setOrdens] = useState("");
  const [addC, setAddC] = useState([]);
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState(500);

  const adicionarLoja = (produto) => {
    const NovoProduto = addC.find((item)=>item.id === produto.id)
    if(NovoProduto === undefined){
      setAddC([... addC, {...produto, amount:1}])
    }else{
      const newCart = addC.map((item)=>{
        if(item.id === produto.id){
          return {...NovoProduto, amount: NovoProduto.amount+1}
        }else{
          return item
        }
      })
      setAddC(newCart)
    }}

  const deleteProduto = (produto) => {

    const DeletarProduto = addC.find((item)=> item.id === produto.id)
    if(DeletarProduto.amount > 1){
      const newCart = addC.map((item)=>{
        if(item.id === produto.id){
          return {... DeletarProduto, amount:DeletarProduto.amount-1}
        }else{
          return item
        }
      })
      setAddC(newCart)
    
    }else{
      const newCart = addC.filter((item) =>{
        return item.id !== produto.id
      })
      setAddC(newCart)
    }
  }

  const getTotal = () => {
    let sum = 0;
    for (let item of addC) {
      sum += item.value * item.amount;
    }
    return sum;
  }
  const cartTotal = getTotal()

  const fechaC = () => {
    if(addC.length === 0){
      alert ("Carrinho vazio")
    }else{
      setAddC([])
      alert("Compra Finalizada, Volte Sempre!")
    }
  }
    return (
      <div>
        <GlobalStyle/> <header> <Header procurar={procurar} setProcurar={setProcurar}/> </header>
        <main>
          <nav> <Filtros minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue}/> </nav>
          <article> <Home Produtos={Produtos} procurar={procurar} order={order} setOrdens={setOrdens} adicionarLoja={adicionarLoja} minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue}/>
          </article>
          <section> <Cart Produtos={Produtos} addC={addC} setAddC={setAddC} deleteProduto={deleteProduto} cartTotal={cartTotal} fechaC={fechaC} />
          </section>
        </main>
        <footer> <Footer/>
        </footer>
      </div>
    )}
export default App;
