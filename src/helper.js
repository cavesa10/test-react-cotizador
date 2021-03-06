export function getDiferenciaYear(year){
  return new Date().getFullYear() - year
}

// calcular  el total a pagar según la marca

export function calcularMarca(marca){
  let incremento
  switch (marca) {
    case 'europeo':
      incremento = 1.30;
      break;
    case 'americano':
      incremento = 1.15
      break;

    case 'asiatico':
      incremento = 1.05
      break;

    default:
      console.log('Error en la seleccion de la marca')
      break;
  }
  return incremento
}

export function calcularPlan(plan){
  return (plan === 'basico') ? 1.20 : 1.50
}

// muestra la primera letra en mayuscula
export function primeraMayuscula ( texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}