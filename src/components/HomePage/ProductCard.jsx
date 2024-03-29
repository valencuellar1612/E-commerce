import { useNavigate } from "react-router-dom"
import { addProductToCartThunk } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";
import './styles/ProductCard.css'

const ProductCard = ({ product }) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/product/${product.id}`);
    };

    const dispatch = useDispatch()

    const handleAddCart = e => {
        e.stopPropagation()
        dispatch(addProductToCartThunk(product.id, 1))
    }

  return (
    <article className="product" onClick={handleNavigate}>
        <header className="product__header">
            <img className="product__img product__img-1" src={product.images?.[0].url} alt="" />
            <img className="product__img product__img-2" src={product.images?.[1].url} alt="" />
        </header>
        <section className="product__body">
            <h4 className="product__brand">{product.brand}</h4>
            <h3 className="product__name">{product.title}</h3>
            <div className="product__price">
                <span className="product__price__label">Price</span>
                <span className="product__price__value">{product.price}</span>
            </div>
            <button className="product__btn" onClick={handleAddCart}>
                <i className='bx bx-cart'></i>
            </button>
        </section>
    </article>
  )
}

export default ProductCard