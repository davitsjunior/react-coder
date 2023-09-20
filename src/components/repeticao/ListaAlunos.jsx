import alunos from '../../data/alunos'

export default function ListaAlunos () {
    const alunoLI = alunos.map(aluno => {
        return(
            <li key={aluno.id}>
                ID: {aluno.id} - Aluno: {aluno.nome} - Nota:  {aluno.nota}
            </li>
        ) 
    })
    return(
        <div>
            <ul style={{ listStyle: "none"}}>
                {alunoLI}
            </ul>
        </div>
    )
}