import {ADD_TO_CART,PLACE_ORDER, QTY_INC, QTY_DEC, ADD_PRODUCT, EDIT_PRODUCT} from './actionTypes'
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

          case QTY_INC : {
                
               return {
                   ...state,
                   cartList: state.cartList.map(item => item.id == payload ? {...item , qty:item.qty+1} : item)
               }
          }

          case QTY_DEC : {
                
               return {
                   ...state,
                   cartList: state.cartList.filter(item => item.qty > 1 && item).map(item => item.id == payload ? {...item , qty:item.qty - 1} : item)
               }
          }
          
          case ADD_PRODUCT: {
               let id = state.productsList[state.productsList.length-1].id + 1
               return {
                    ...state,
                    productsList: [...state.productsList, {...payload, id}]
               }
          }
          case EDIT_PRODUCT: {
               return {
                    ...state,
                    productsList: state.productsList.map(item => item.id === payload.id ? item = payload : item)
               }
          }

          default:
              return { ...state }
     
}
}

export default reducer