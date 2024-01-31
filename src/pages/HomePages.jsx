import { useDispatch, useSelector } from "react-redux"
import store from "../store"
import { getProductsThunk } from "../store/slices/products.slice";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/HomePage/ProductCard";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";
import './styles/HomePage.css'

const HomePages = () => {

    const [namevalue, setNamevalue] = useState('');
    const [categorySelected, setCategorySelected] = useState('all');
    const [priceRange, setPriceRange] = useState({
        from:0,
        to: Infinity
    });

    const products = useSelector( store => store.products );

    const dispatch = useDispatch();

    useEffect(()=> {
       dispatch(getProductsThunk())
    }, []);

    const inputName = useRef();

    const handleInputName = () => {
        setNamevalue(inputName.current.value.toLowerCase().trim());
    };

    const callbackFilter = (prod) => {
        //filtrado nombre 
        const filterName = prod.title.toLowerCase().includes(namevalue);
        //filtrado category
        const filterCtegory = categorySelected === 'all' ? true : categorySelected === prod.category.id;
        //filtrado rango
        const price = +prod.price;
        const filterPrice = priceRange.from <= price && price <= priceRange.to;
        return filterName && filterCtegory && filterPrice;
    };

  return (
    <div>
        <input ref={inputName} onChange={handleInputName} type="text" />
        <div>
            <h2>Filters</h2>
            <FilterPrice setPriceRange= {setPriceRange}/>
            <FilterCategory setCategorySelected = {setCategorySelected} />
        </div>
        <div className="product-container">
            { products?.filter(callbackFilter).map(prod => (
                    <ProductCard 
                        key={prod.id}
                        product = {prod}/>
                ))}
        </div>
    </div>
  )
}

export default HomePages;