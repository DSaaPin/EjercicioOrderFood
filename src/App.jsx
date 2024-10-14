import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import './components/Food';
import Food from './components/Food';

function App() {
  //const [count, setCount] = useState(0)

  const Foods = [
    { id: 0, name: '🍔', price: 300, quantity: 0 },
    { id: 1, name: '🍟', price: 100, quantity: 0 },
    { id: 2, name: '🍦', price: 80, quantity: 0 },
    { id: 3, name: '🥤', price: 110, quantity: 0 },
    { id: 4, name: '🥗', price: 150, quantity: 0 },
    { id: 5, name: '🍜', price: 200, quantity: 0 }
  ];

  return (
    <>
      <div>
        {Foods.map((food) => (
          <Food key={food.id} name={food.name} />
        ))}
      </div>
    </>
  )
}

export default App
