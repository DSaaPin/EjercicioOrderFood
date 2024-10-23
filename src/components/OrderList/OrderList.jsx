import React, { useEffect, useState } from "react";
import styles from "./OrderList.styles.module.css";
import ListItem from "../ListItem/ListItem";
import Total from "../Total/Total";

const OrderList = (props) => {

    const { orderList, setOrderList , clearOrderItem} = props;
    console.log(orderList);

    return(
        <div className={styles.orderBox}>
        <div className={styles.titleList}>
          <h2>Order List</h2>
          <span onClick={ () => setOrderList([])}>🗑</span>
        </div>
        <div className={styles.spaceItemsPrice}>
          <div className={styles.items}>
            {orderList.map((item) => (              
              <>
          {item.quantity>0 && <ListItem
                key={item.id}
                product={item}
                clearOrderItem={clearOrderItem}
              />}
          </>
              
            ))}
          </div>
          <div>
            <hr />
            <Total orderList={orderList}/>
          </div>
        </div>
      </div>
    )

}

export default OrderList;