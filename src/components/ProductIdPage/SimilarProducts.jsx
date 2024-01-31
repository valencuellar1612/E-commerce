import { useEffect } from "react"
import useFetch from "../../hook/useFetch"
import ProductCard from "../HomePage/ProductCard";

const SimilarProducts = ({ categoryId, idProd }) => {

    const [ productsByCategory, getProductsByCategory]= useFetch();

    useEffect(()=> {
        if(categoryId){
            const url = `https://e-commerce-f0b0.onrender.com/products?categoryId=${categoryId}`;
            getProductsByCategory(url);
        }
    }, [categoryId]);

    return (
    <article>
        <h2>Similar Products</h2>
        <div className="product-container">
            {productsByCategory?.filter(prod => prod.id !== idProd).map(product => (
                <ProductCard
                    key={product.id}
                    product={product}/>
                ))}
        </div>
    </article>
  )
}

export default SimilarProducts