import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Product from './product'

class Home extends Component {
    render() {
        let {productList} = this.props
        return (
            <div>
                <Link to='/'>
                    {productList?.map(item => <Product data={item} />)}
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    productList: state.productList
})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, null)(Home)
