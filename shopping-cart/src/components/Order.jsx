import React, { Component } from 'react'
import { connect } from 'react-redux'

function Order(props){
    const {cartList,orderList}=props
    console.log(orderList)
    return(
        <>  
        {
            orderList && orderList.map((item,index)=>{
               return( <div key={index}>
                    <div>
                        <label>Name :{item.name}</label>
                        <label>phone : {item.phone}</label>
                    </div>
                    {
                        item.cartList && item.cartList.map((ele,index)=>{
                            return(
                            <div key={index} style={{border:"1px solid black"}}>
                                <div>
                                    <img className="img-fluid" width="100" height="100" src={ele.mainImage} />
                                </div>
                                <div>{ele.productName}</div>
                                <div>{ele.price}</div>
                                <div>{ele.description}</div>
                                <div>{ele.qty}</div>
                            </div>)
                        })
                    }
                </div>)
                
                })
        }
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