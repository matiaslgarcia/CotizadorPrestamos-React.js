import React from 'react';

const Resultado = ({cantidad, total, plazo}) => (
   <div className= "u-full-width resultado">
       <h2>Resumen</h2>
       <p><strong>La cantidad solicitada es: $</strong>{cantidad}</p>
       <p><strong>A pagar en: {plazo} Meses</strong></p>
       <p><strong>Su pago mensual es de: </strong>{(total / plazo).toFixed(2)} </p>
       <p><strong>Total a pagar: $</strong> {(total).toFixed(2)}</p>
   </div>
);

 
export default Resultado;