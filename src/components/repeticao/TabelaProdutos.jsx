import "./TabelaProdutos.css"
import produtos from "../../data/produtos"

export default function TabelaProdutos() {
    const linhas = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.produto}</td>
                <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>
        )
    })
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PRODUTO</th>
                        <th>PREÇO</th>
                    </tr>
                </thead>
                <tbody>
                    {linhas}
                </tbody>
            </table>
        </div>
    )
}