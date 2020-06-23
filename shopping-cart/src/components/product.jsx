import React, { Component } from 'react'
import { addToCart } from '../Redux/action'
import { connect } from 'react-redux'

export class Product extends Component {
    render() {
        const {data, addToCart, cartList}  = this.props
        console.log(cartList)
        return (
            <div style={{border:"1px solid black"}}>
                <div>
                    <img className="img-fluid" width="100" height="100" src={data.mainImage} />
                </div>
                <div>{data.productName}</div>
                <div>{data.price}</div>
                <div>{data.description}</div>
                <div>{data.stock}</div>
                <div>
                    <button onClick={() => addToCart(data.id)}>Add To Cart</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    productList: state.productList,
    cartList: state.cartList
})

const mapDispatchToProps = dispatch => ({
    addToCart: payload => dispatch(addToCart(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)

// export default Product
