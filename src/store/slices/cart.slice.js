import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfifToken from "../../utils/getTokenConfig";

const cartSlice = createSlice({
    name: 'cart',
    initialState: null,
    reducers: {
        addToCar: (currentValue, action) => [...currentValue, action.payload],
        removeFromCart: (currentValue, action) => {
            return currentValue.filter(prod => prod.id !== action.payload)
        },
        setCart: (currentValue, action) => action.payload
    }
});

export const {addToCar, removeFromCart, setCart} = cartSlice.actions

export default cartSlice.reducer
const baseUrl = 'http://localhost:8080/cart'
export const getCartThunk = () => (dispatch) => {
    const url = `${baseUrl}`

    axios.get(url, getConfifToken())
        .then(res => dispatch(setCart(res.data)) )
        .catch(err => console.log(err))
}

export const addProductToCartThunk = (productId, quantity = 1) => (dispatch) => {
    const url = `${baseUrl}`
    const data = {productId, quantity}
    axios.post(url, data, getConfifToken())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

export const deleteProductFromCartThunk = (id) => (dispatch) => {
    const url = `${baseUrl}/${id}`
    axios.delete(url,getConfifToken())
    .then(res => {
        console.log(res.data)
        dispatch(removeFromCart(id))
    })
    .catch(err => console.log(err))
}

