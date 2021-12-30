import { ActionType } from "../contant/actiontype"

export const SET_PRODUCTS = (products) =>{
    return{
        type:ActionType.SET_PRODUCTS,
        payload:products
    }
}


export const selectedProduct = (product) =>{
    return{
        type:ActionType.SELECT_PRODUCT,
        payload:product 
    }
}