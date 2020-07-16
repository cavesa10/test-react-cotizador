import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const MensajeResultado = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
  color: #333;
`;
const ContenedorResultado = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;
const TextoCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

export const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <MensajeResultado>Elige marca, año y plan del seguro</MensajeResultado>
  ) : (
    <ContenedorResultado>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextoCotizacion>El total es: $<span>{cotizacion}</span></TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ContenedorResultado>
  );
};

Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired,
};