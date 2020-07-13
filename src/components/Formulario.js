import React from 'react'
import styled from '@emotion/styled'

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
   border:none;
   transition: background-color .6s ease;
   margin-top: 1rem;

   &:hover{
     cursor: pointer;
     background-color: #26c6da;
   }
 `;

export const Formulario = () => {
  return (
    <form >
      <Campo>
        <Label htmlFor="marca">Marca</Label>
        <Select name="" id="marca">
          <option value="">-- Selecciona --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label htmlFor="year">Año</Label>
        <Select name="" id="year">
          <option value="">-- Selecciona --</option>
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

          <InputRadio type="radio" name="plan" value="basico" id="basico"/>
          <Label htmlFor="basico">Básico</Label>

          <InputRadio type="radio" name="plan" value="completo" id="completo"/>
          <Label htmlFor="completo">Completo</Label>
        </Campo>
          
          <Boton type="button" >Cotizar</Boton>
    </form>
  )
}
