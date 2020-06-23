import React, { Component } from 'react'
import { connect } from 'react-redux'

function Order(props){
    const {orderList}=props
    // console.log(orderList)
    let total = 0

    for(let i=0;i<orderList.length;i++) {
        console.log(orderList[i].cartList.length)
        let len = orderList[i].cartList.length
        for(let j=0;j<len;j++) {
            // console.log(Math.floor(orderList[i].cartList[j].price) , Number(orderList[i].cartList[j].qty))
            total += (Number(orderList[i].cartList[j].price) * Number(orderList[i].cartList[j].qty))
         }
    }
   
    return(
        <>  
        {
            orderList && orderList.map((item,index)=>{
               return( <div key={index}>
                    <div style={{fontSize:'25px'}}>
                        <div>Name :{item.name}</div>
                        <div>phone : {item.phone}</div>
                        <div>address: {item.address}</div>
                    </div>
                    {
                        item.cartList && item.cartList.map((ele,index)=>{
                            return(
                            <div key={index} style={{border:"1px solid black"}}>
                                <div>
                                    <img className="img-fluid" width="100" height="100" src={ele.mainImage} />
                                </div>
                                <div>{ele.productName}</div>
                                <div>₹{ele.price}</div>
                                <div>{ele.description}</div>
                                <div>QTY: {ele.qty}</div>
                            </div>)
                        })
                    }
                </div>)
                
                })
        }

    <div>TOTAL: {total}</div>
        </>
    )
}

const mapStateToProps=state=>{
    return{
        cartList:state.cartList,
        orderList:state.orderList
    }
}

export default connect(mapStateToProps,null)(Order)