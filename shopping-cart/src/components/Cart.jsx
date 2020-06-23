import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from "react-router-dom";
import {placeOrder} from '../Redux/action';

class Cart extends Component{
    constructor(props){
        super()
        this.state={
            name:'',
            phone:'',
            flag:false
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleClick=()=>{
        this.props.placeOrder({name:this.state.name,phone:this.state.phone, cartList:this.props.cartList})

        this.setState({
            flag:true
        })
    }
    render(){
            const {cartList}=this.props
            console.log(this.state)
            if(this.state.flag){
                return <Redirect to="/orders" />
            }
        return(
            <>  
            <div>
                <label>Name</label>
                <input name="name" type="text" onChange={this.handleChange} />
                <label>phone</label>
                <input name="phone" type="text" onChange={this.handleChange} />
                <button onClick={()=>this.handleClick()}>placeorder</button>
            </div>
            {
                cartList && cartList.map((ele,index)=>{
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
            </>
        )
    }
}

const mapStateToProps=state=>{
    return{
        cartList:state.cartList
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        placeOrder:(payload)=>dispatch(placeOrder(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)