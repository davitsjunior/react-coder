
import './style.css'
import { useState } from "react";

export default props => {

    function gerarNumeros(qtde, mim, max) {
        const numeros = [];
        for (let i = 0; i < qtde; i++) {
            let n = Math.floor(Math.random() * (max + 1 - mim) + mim);
            numeros.includes(n) ? i-- : numeros[i] = n;
        }
        return numeros.sort((n1, n2) => n1 - n2);
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(qtde).fill(0)
    const [number, setNumber] = useState(numerosIniciais)

    function jogo(props) {
        setNumber = gerarNumeros(qtde, props.mim, props.max)
    }

    return (
        <div className='Mega'>
            <h2>MEGA</h2>
            <h3><strong>{number.join(' ')}</strong></h3>
            <div>
                <label>Qtde de Números</label>
                <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button className='gerar' onClick={_ => setNumber(gerarNumeros(qtde, 1, 60))}>Gerar Números</button>
        </div>
    )
}