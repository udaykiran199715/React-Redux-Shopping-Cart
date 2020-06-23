import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from "react-router-dom";
import {placeOrder,qtyInc, qtyDec} from '../Redux/action';

class Cart extends Component{
    constructor(props){
        super()
        this.state={
            name:'',
            phone:'',
            address:'',
            flag:false
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleClick=()=>{
        this.props.placeOrder({name:this.state.name,phone:this.state.phone, address:this.state.address, cartList:this.props.cartList})

        this.setState({
            flag:true
        })
    }
    render(){
            const {cartList, qtyInc, qtyDec}=this.props
            console.log(this.state)
            if(this.state.flag){
                return <Redirect to="/orders" />
            }
        return(
            <>  
        
            {
                cartList && cartList.map((ele,index)=>{
                    return(
                    <div key={index} style={{border:"1px solid black"}}>
                        <div>
                            <img className="img-fluid" width="100" height="100" src={ele.mainImage} />
                        </div>
                        <div>{ele.productName}</div>
                        <div>₹{ele.price}</div>
                        <div>{ele.description}</div>
                        <div><button onClick={()=> qtyDec(ele.id)}  className='py-1' style={{fontSize:'20px', margin:'0px 10px'}}>-</button>{ele.qty}<button onClick={()=> qtyInc(ele.id)}  className='py-1' style={{fontSize:'20px', margin:'0px 10px'}}>+</button></div>
                    </div>)
                })
            }

               <div>
                <div>
                <label>Name</label>
                <input name="name" type="text" onChange={this.handleChange} />
                </div>
                <div>
                <label>phone</label>
                <input name="phone" type="text" onChange={this.handleChange} />
                </div>
                <div>
                <label>Address</label>
                <input name="address" type="text" onChange={this.handleChange} />
                </div>
              
             
                <button onClick={()=>this.handleClick()}>placeorder</button>
            </div>
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
        placeOrder:(payload)=>dispatch(placeOrder(payload)),
        qtyInc:(payload) => dispatch(qtyInc(payload)),
        qtyDec:(payload) => dispatch(qtyDec(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)