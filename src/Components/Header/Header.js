import { HeaderContainer, InputHeader } from "./headerStyle"
export default function Header ({ procurar, setProcurar }){
    const Procurar = (e) => {
        setProcurar(e.target.value)
    };
    console.log(Procurar)
    return(
        <HeaderContainer>
            <h1>CosmicStore</h1>
            <InputHeader placeholder="                                    Busque seu produto aqui" type="text" value={procurar} onChange={Procurar}/>
        </HeaderContainer>
    )
}