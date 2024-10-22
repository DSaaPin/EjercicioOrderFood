import { useState } from 'react'
import styles from './App.module.css'
import OrderList from "./components/OrderList/OrderList";
import Product from "./components/Product/Product";

function App() {

  const PRODUCT_LIST = [
    { id: 0, name: '🍔', price: 300, quantity: 1 },
    { id: 1, name: '🍟', price: 100, quantity: 2 },
    { id: 2, name: '🍦', price: 80, quantity: 3 },
    { id: 3, name: '🥤', price: 110, quantity: 2 },
    { id: 4, name: '🥗', price: 150, quantity: 2 },
    { id: 5, name: '🍜', price: 200, quantity: 1 },
  ];

  const [orderList, setOrderList] = useState([]);

  const handleClickOnProduct = (product) => {
    setOrderList([product, ...orderList]);
  }

  return (
      <div className={styles.container}>
      <div className={styles.productContainer}>
        <h1>Add to your order:</h1>

        {PRODUCT_LIST.map((product) => (
          <Product key={product.id} product={product} onClick={(product) => handleClickOnProduct(product)} />
        ))}
      </div>
      <OrderList orderList={orderList} />
    </div>
  )
}

export default App;
