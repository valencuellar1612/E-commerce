import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartThunk, setCart } from "../store/slices/cart.slice"
import CartProduct from "../components/CartPage/CartProduct"
import getConfifToken from "../utils/getTokenConfig"
import axios from "axios"

const CartPage = () => {

  const cart =  useSelector( store => store.cart )

  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(getCartThunk())
  }, [])

  const totalPriceCart = cart?.reduce((acc,cv) => {
    const price = Number(cv.product.price)
    return acc + price * cv.quantity
  }, 0)

  const handlePurchase = () => {
    const url = 'https://e-commerce-f0b0.onrender.com/purchases'
    axios.post(url, '', getConfifToken()
    )
    .then(res => {
      console.log(res.data)
      dispatch(setCart([]))
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Cart</h1>
      <div className="product-container">
        {
          cart?.map(prod => (
            <CartProduct 
             key={prod.id}
             prod={prod}
            />
          ))
        }
      </div>
      <hr />
      <footer className="product__body">
        <span className="product__name">Total:</span>
        <span className="product__price">{totalPriceCart}</span>
        <button className="login__btn" onClick={handlePurchase}>Checkout</button>
      </footer>
    </div>
  )
}

export default CartPage