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
import DiretaPai from "./comunicação/DiretaPai";
import IndiretaPai from "./comunicação/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default () => (
    <div className="App">
        <h1>Fundamentos JS</h1>
        <p>COD3R</p>

        <div className="Cards">

            <Card titulo="#13 - Desafio MegaSena" color="#2F4F4F">
              <Mega qtde={8}/>
            </Card>
            
            <Card titulo="#12 - Contador" color="#FF0000">
              <Contador numeroInicial={10}/>
            </Card>

            <Card titulo="#11 - Componente Controlado" color="#8B4513">
              <Input/>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#006400">
              <IndiretaPai/>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#B22222">
              <DiretaPai/>
            </Card>

            <Card titulo="#08 - Exibição Condicional" color="#87CEEB">
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