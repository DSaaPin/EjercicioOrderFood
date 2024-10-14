import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import './components/Food';
import Food from './components/Food';

function App() {
  //const [count, setCount] = useState(0)

  const Foods = [
    {icon: '🍔', name: 'Burger'},
    {icon: '🍟', name: 'Fries'},
    {icon: '🍦', name: 'Ice cream'},
    {icon: '🥤', name: 'Soda'},
    {icon: '🥗', name: 'Salad'},
    {icon: '🍜', name: 'Ramen'}
  ];

  return (
    <>
      <div>
        {Foods.map((food, i) => (
          <Food key={i} icon={food.icon}/>
        ))}
      </div>
    </>
  )
}

export default App
