import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Product from './product'
// import data from '../data.json'

class Home extends Component {
    render() {
        let {productsList} = this.props
        // console.log(productList)
        return (
            <div className="mt-5">
                {
                    productsList?.map(ele=>
                        <Product key={ele.id}  data={ele} />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    productsList: state.productsList
})

export default connect(mapStateToProps, null)(Home)
// export default Home

