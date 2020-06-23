import React, { Component } from 'react'
// import { connect } from 'react-redux'

export class Product extends Component {
    render() {
        const {data}  = this.props
        return (
            <div>
                {/* {productList?.map(item => <div key={itemm.id}></div>)} */}
                <div>
                    <div>
                        <img src={data.mainImage} />
                    </div>
        <div>{data.productName}</div>
        <div>{data.price}</div>
        <div>{data.description}</div>
        <div>{data.stock}</div>
                </div>
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
