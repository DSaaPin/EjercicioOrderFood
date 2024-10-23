import React from 'react'
import classes from "./Total.styles.module.css"

function Total({orderList}) {
  const suma = () => {

    const resultado = orderList.reduce((ac, producto) => {ac+=producto.price * producto.quantity; return ac} ,0)
    return resultado
  };

  return (
    <div className={classes.totalPrice}>
      <div className={classes.total}>Total</div>
      <div className={classes.sum}>${suma()}</div>
    </div>
  );
}

export default Total