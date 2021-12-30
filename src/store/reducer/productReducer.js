import { ActionType } from "../contant/actiontype"

const initialState ={
    products:[{
        id:1,
        title:'page',
        category:'programmer'
    }]
}

export  const productReducer = (state = initialState ,{type,payload})=>{
    
    
        switch (type) {
    
        case ActionType.SELECT_PRODUCT:
            return state
    
        default:
            return state
        }
    
}