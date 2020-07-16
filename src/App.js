import React, { useState } from "react";
import styled from "@emotion/styled";

import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { Resultado } from "./components/Resultado";
import { Resumen } from "./components/Resumen";
import { Spiner } from "./components/Spiner";

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
      plan: "",
    },
  });
  // extraemos datos
  const { datos, cotizacion } = resumen;

  // spiner
  const [cargando, setCargando] = useState(false);

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} setCargando={setCargando} />
        {cargando ? <Spiner /> : null}
        <Resumen datos={datos} />
        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
