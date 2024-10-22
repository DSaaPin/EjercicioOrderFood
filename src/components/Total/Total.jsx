import React from 'react'
import classes from "./Total.styles.module.css"

function Total() {
  const suma = (a, b) => {
    return a + b;
  };
  return (
    <div className={classes.totalPrice}>
      <div className={classes.total}>Total</div>
      <div className={classes.sum}>${suma(50, 400)}</div>
    </div>
  );
}

export default Total