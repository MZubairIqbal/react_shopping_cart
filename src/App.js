import './App.css';
import CartContextProvider from './components/CartContextProvider';
import ShoppingCart, { ShoppingCartContext } from './components/ShoppingCart';
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <ShoppingCart className="ShoppingCart" />
      </CartContextProvider>
    </div >
  );
}

export default App;
