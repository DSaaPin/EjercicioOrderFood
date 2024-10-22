import React from "react";
import styles from "./ListItem.styles.module.css";

function ListItem({ product, amount, price }) {
    return (
      <div className={styles.items}>
        <div className={styles.productAmount}>
          <div>{product}</div>
          <div>{amount}</div>
        </div>
        <div className={styles.price}>{price}</div>
      </div>
    );
  }
  
  export default ListItem;
  