import React, { useState } from "react";
import styled from "@emotion/styled";
import {getDiferenciaYear, calcularMarca, calcularPlan} from '../helper'

const Campo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const Label = styled.label`
  flex: 0 0 80px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin-right: 0.5rem;
`;
const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.6s ease;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Formulario = ({setResumen}) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState(false);

  // Extraer los valores del formulario y colocarlos en el state
  const { marca, year, plan } = datos;

  // leer datos del formulario y colocarlos en el state

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // manejador del submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    
    //basae de 2000
    let resultado = 2000 

    // obtener la diferencia de años
    const diferencia = getDiferenciaYear(year)
    console.log(diferencia)

    // por cada año hay que restar el 3%
    resultado -= ( (diferencia * 3) *resultado ) / 100
    console.log(resultado)

    // Americano 15%
    // Asia 5%
    // Europeo 30%
    resultado *= calcularMarca(marca)
    console.log(resultado)

    // Basico aumenta 20%
    // Completoo 50%

    resultado = parseFloat(calcularPlan(plan)*resultado).toFixed(2)
    console.log(resultado)

    setResumen({
      cotizacion: resultado,
      datos
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <Error>
          <p>Todos los campos son obligatorios</p>
        </Error>
      ) : null}
      <Campo>
        <Label htmlFor="marca">Marca</Label>
        <Select onChange={handleChange} name="marca" value={marca} id="marca">
          <option value="">-- Selecciona --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label htmlFor="year">Año</Label>
        <Select onChange={handleChange} name="year" value={year} id="year">
          <option value="">-- Selecciona --</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Plan</Label>

        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          id="basico"
          checked={plan === "basico"}
          onChange={handleChange}
        />
        <Label htmlFor="basico">Básico</Label>

        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          id="completo"
          checked={plan === "completo"}
          onChange={handleChange}
        />
        <Label htmlFor="completo">Completo</Label>
      </Campo>

      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};
