import "./App.css"

import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default () => (
    <div className="App">
        <h1>Fundamentos JS</h1>
        <p>COD3R</p>

        <div className="Cards">

            <Card titulo="#08 - Exibição Condicional I" color="#87CEEB">
               <ParOuImpar
                numero={7}
               />
               <UsuarioInfo usuario={{nome: 'Davi Junior'}}/>
               <UsuarioInfo usuario={{email: 'dj@dj.com'}}/>
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#BBE3A3">
               <TabelaProdutos/>
            </Card>

            <Card titulo="#06 - Componentes com Repetição" color="#DDC8F8">
               <ListaAlunos/>
            </Card>

            <Card titulo="#05 - Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Tomas">
                    <FamiliaMembro nome="Davi" />
                    <FamiliaMembro nome="Lavínia" />
                    <FamiliaMembro nome="David" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio
                    min={1}
                    max={10}
                />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Davi Jr"
                    nota="9.8"
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>
);