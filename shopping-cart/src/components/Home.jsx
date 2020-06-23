import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Product from './product'
import data from '../data.json'

class Home extends Component {
    render() {
        // let {productList} = this.props
        console.log(data)
        return (
            <div className="mt-5">
                {
                    data.map(ele=>
                        <Product key={ele.id}  data={ele} />
                    )
                }
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
//     productList: state.productList
// })

// export default connect(mapStateToProps, null)(Home)
export default Home

