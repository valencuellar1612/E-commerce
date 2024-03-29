import { useEffect } from "react";
import useFetch from "../../hook/useFetch";

const FilterCategory = ({ setCategorySelected }) => {

    const [categories, getCategories] = useFetch();



    useEffect(()=> {
        const url = 'https://e-commerce-f0b0.onrender.com/categories'
        getCategories(url)
    }, []);

    const handleCategory = id => {
        setCategorySelected(id)
    };

    return (
    <section>
        <h3>Category</h3>
        <hr />
        <ul>
            <li onClick={() => handleCategory('all')}>All categories</li>
            {categories?.map((category) => (
                    <li onClick={()=> handleCategory(category.id)}  key={category.id}>{category.name}</li>
                ))}
        </ul>
    </section>
  );
};

export default FilterCategory