import React, { useEffect, useState } from "react";
import styles from "./OrderList.styles.module.css";
import ListItem from "../ListItem/ListItem";
import Total from "../Total/Total";

const OrderList = (props) => {

    const { orderList } = props;
    console.log(orderList);

    return(
        <div className={styles.orderBox}>
        <div className={styles.titleList}>
          <h2>Order List</h2>
          <span>🗑</span>
        </div>
        <div className={styles.spaceItemsPrice}>
          <div className={styles.items}>
            {orderList.map((item) => (
              <ListItem
                key={item.id}
                product={item.name}
                amount={item.quantity}
                price={item.price}
              />
            ))}
          </div>
          <div>
            <hr />
            <Total />
          </div>
        </div>
      </div>
    )

}