import { ConteinerFiltros, FiltrosInput, Imagem } from "./FiltrosStyle";
export default function Filtros({minValue, setMinValue, maxValue, setMaxValue}){
    return (
        <ConteinerFiltros>
            <h2>Pesquisar</h2>
            <p>Valor mínimo:</p>
            <FiltrosInput type="number" min="0" value={minValue} onChange={(e) => setMinValue(e.target.value)}/>
            <p>Valor máximo:</p>
            <FiltrosInput type="number" min="100" value={maxValue} onChange={(e) => setMaxValue(e.target.value)}/>
        </ConteinerFiltros>
    )
}