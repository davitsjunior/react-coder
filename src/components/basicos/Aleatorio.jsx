export default (props) => {
    const {min, max} = props
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo: </strong>{min}</p>
            <p><strong>Valor Máximo: </strong>{max}</p>
            <p><strong>Valor Escolhido: </strong>{Math.floor(Math.random() * (max - min + 1)) + min}</p>
        </div>
    )
}
