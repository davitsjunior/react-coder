export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado (a)' : 'Reprovado (a)';
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>
                <strong> {props.aluno} </strong> Com a nota:
                <strong> {props.nota} </strong> e está <strong>{ status }</strong>
            </h3>
        </div >
    )
}