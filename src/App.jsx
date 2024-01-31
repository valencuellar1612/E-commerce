
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './pages/HomePages'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HeaderNav from './components/share/HeaderNav'
import CartPage from './pages/CartPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PurchasesPage from './pages/PurchasesPage'

function App() {

  return (
    <div>
      <HeaderNav/>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/product/:id' element={<ProductIdPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route element={<ProtectedRoutes/>} >
          <Route path='/cart' element={<CartPage/>}/> 
          <Route path='/purchases' element={<PurchasesPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
