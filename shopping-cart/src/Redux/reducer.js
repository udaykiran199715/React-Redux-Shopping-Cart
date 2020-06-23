import {ADD_TO_CART} from './actionTypes'
import data from '../data.json'
// console.log(data)

const initState = {
     productsList: data,
     cartList:[]
}

const reducer = (state= initState , {type, payload}) => {
     switch (type) {
          case ADD_TO_CART: {
          return {
                ...state,
              cartList: state.productsList.filter(elem => elem.id===payload && elem)
            
          }
     }
          default:
              return { ...state }
     
}
}

export default reducer