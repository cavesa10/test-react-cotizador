import React, {useState} from 'react';
import {Header} from './components/Header'
import {Formulario} from './components/Formulario'
import {Resultado} from './components/Resultado'
import {Resumen} from './components/Resumen'


import styled from '@emotion/styled'

const Contenedor = styled.div`
  max-width: 500px;
  margin: 0 auto;
  
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;


function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: ""
    }
  })
  // extraemos datos
  const {datos} = resumen
  return (
    <Contenedor>
      <Header
        titulo ='Cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} />
      </ContenedorFormulario>
      <Resumen datos={datos} />
      <Resultado />
    </Contenedor>
);
}

export default App;
