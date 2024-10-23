import React from "react";
import styles from "./ListItem.styles.module.css";

function ListItem({ product,  clearOrderItem }) {

    console.log("product", product)
    return (
      <div className={styles.items}>
        <div className={styles.productAmount}>
          <div>{product.name}</div>
          <div>{product.quantity}</div>          
        </div>
        <div className={styles.price}>{product.price}</div>
        <div onClick={() => {clearOrderItem(product.id)}}>🗑</div>
      </div>
    );
  }
  
  export default ListItem;
  