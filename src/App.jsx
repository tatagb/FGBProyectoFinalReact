import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Inicio greeting="FGB MÚSICA" />} />
          <Route exact path="/tienda" element={<ItemListContainer />} />
          <Route exact path="/tipo/:tipo" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
