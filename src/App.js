import { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'
import Cart from './components/Cart/Cart'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const showCart = () => {
    setIsCartOpen(true)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  return (
    <CartProvider>
      {isCartOpen && <Cart onClose={closeCart} />}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
