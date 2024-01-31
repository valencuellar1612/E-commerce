import { useDispatch } from "react-redux"
import { deleteProductFromCartThunk } from "../../store/slices/cart.slice"
import './styles/CartProduct.css'

const CartProduct = ({prod}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteProductFromCartThunk(prod.id))
    }

  return (
    <section className="product">
        <header className="product__header">
            <img className="product__img" src={prod.product.images[0].url} alt="" />
        </header>
        <article className="product__body">
            <h3 className="product__name">{prod.product.title}</h3>
            <span className="product__price">{prod.quantity}</span>
            <div>
                <span className="product__price">Price</span>
                <span>{prod.product.price}</span>
            </div>
        </article>
        <button  className="product__btn" onClick={handleDelete}>
            <i className='bx bx-trash'></i>
        </button>
    </section>
  )
}

export default CartProduct