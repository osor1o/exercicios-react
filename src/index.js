import React from 'react';
import ReactDOM from 'react-dom';
// import Primeiro from './components/PrimeiroComponente';
// import { CompA, CompB as B } from './components/DoisComponentes';
import MultiElementos from './components/MultiElementos';

const element = document.getElementById("root");
ReactDOM.render(
    <div>
        <MultiElementos />
        {/* <CompA valor="Olá eu sou o A"/>
        <B valor="B na área!"/>
        <Primeiro valor={"Bom Dia!"} /> */}
    </div>
, element);