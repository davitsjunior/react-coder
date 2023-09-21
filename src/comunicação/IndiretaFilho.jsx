export default props =>{
    const cb = props.quandoClicar
    const min = 39
    const max = 60
    const gerarIdade = () => parseInt(Math.random() * (max-min)) + min
    const gerarNerd = () => Math.random() > 0.5
    return(
        <div>
            <div>Filho</div>
            <button onClick={e => cb('Davi', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}