import { useParams } from "react-router-dom"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import useFetch from "../hook/useFetch"
import { useEffect } from "react"
import SimilarProducts from "../components/ProductIdPage/SimilarProducts"
import SliderImgs from "../components/ProductIdPage/SliderImgs"

const ProductIdPage = () => {

  const {id} = useParams();

  const [product, getProduct] = useFetch();

  useEffect(()=> {
    const url = `http://localhost:8080/products/${id}`;
    getProduct(url);
  }, [id]);

  return (
    <div>
      <SliderImgs product={product} />
      <ProductInfo product={product} />
      <SimilarProducts categoryId={product?.category.id} idProd={product?.id} />
    </div>
  )
}

export default ProductIdPage;