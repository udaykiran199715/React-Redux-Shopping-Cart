import React, { Component } from 'react'
// import { connect } from 'react-redux'

export class Product extends Component {
    render() {
        const {data}  = this.props
        return (
            <div style={{border:"1px solid black"}}>
                <div>
                    <img className="img-fluid" width="100" height="100" src={data.mainImage} />
                </div>
                <div>{data.productName}</div>
                <div>{data.price}</div>
                <div>{data.description}</div>
                <div>{data.stock}</div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
//     productList: state.productList
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, null)(product)

export default Product
