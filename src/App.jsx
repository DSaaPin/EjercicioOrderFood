import { useState } from 'react'
import styles from './App.module.css'
import OrderList from "./components/OrderList/OrderList";
import Product from "./components/Product/Product";

function App() {

  const PRODUCT_LIST = [
    { id: 0, name: '🍔', price: 300, quantity: 0 },
    { id: 1, name: '🍟', price: 100, quantity: 0 },
    { id: 2, name: '🍦', price: 80, quantity: 0 },
    { id: 3, name: '🥤', price: 110, quantity: 0 },
    { id: 4, name: '🥗', price: 150, quantity: 0 },
    { id: 5, name: '🍜', price: 200, quantity: 0 },
  ];

  const [orderList, setOrderList] = useState([]);

  const handleClickOnProduct = (product) => {

    const exists = orderList.find(p => product.id === p.id)

    if(exists){

      const updatedProduct = orderList.map((producto) => {
        if(producto.id === product.id){
          producto.quantity++;
        }
        return producto
      })

      setOrderList(updatedProduct);
    }else{

      product.quantity++;
      setOrderList([product,...orderList]);
      
    } 
  }

  const clearOrderItem = (id) => {

    const filteredOrderList = orderList.filter(product => product.id !== id)

    setOrderList(filteredOrderList);
    console.log("filteredOrderList", filteredOrderList);
    console.log("id", id)

  }

  return (
      <div className={styles.container}>
      <div className={styles.productContainer}>
        <h1>Add to your order:</h1>

        {PRODUCT_LIST.map((product) => (
          <Product key={product.id} product={product} onClick={(product) => handleClickOnProduct(product)} />
        ))}
      </div>
      <OrderList clearOrderItem={clearOrderItem} setOrderList={setOrderList} orderList={orderList} />
    </div>
  )
}

export default App;
