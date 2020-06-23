import {ADD_TO_CART,PLACE_ORDER} from './actionTypes'
import data from '../data.json'
// console.log(data)

const initState = {
     productsList: data,
     cartList:[],
     orderList:[]
}

const reducer = (state= initState , {type, payload}) => {
     switch (type) {
          case ADD_TO_CART: {
               let item =state.productsList.find(elem => elem.id===payload)
               let cart=[...state.cartList]
               let flag=false
               for(let i=0;i<cart.length;i++){
                    if(cart[i].id===Number(payload)){
                         flag=true
                         cart[i].qty++;
                         break
                    }
               }

               if(!flag){
                    return {
                         ...state,
                       cartList: [...state.cartList, {...item, qty:1}]
                   }
               }
               else{
                    return {
                         ...state,
                       cartList: cart
                   }
               }
          }

          case PLACE_ORDER:{
               return{
                    ...state,
                    orderList:[...state.orderList, payload]
               }
          }
          default:
              return { ...state }
     
}
}

export default reducer