import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Product from './product'

 function Products(props) {
     let {productsList} = props
    return (
        <div>
            <div>
                
            <div className="mt-5">
                {
                    productsList?.map(ele=>
                        <div key={ele.id} style={{border:"1px solid black"}}>
                        <div>
                            <img className="img-fluid" width="100" height="100" src={ele.mainImage} />
                        </div>
                        <div>{ele.productName}</div>
                        <div>₹{ele.price}</div>
                        <div>{ele.description}</div>
                        <div>
                            <Link to={`product/${ele.id}/edit`}><button >Edit Product</button></Link>
                        </div>
                    </div>
                    )
                }
            </div>

               <div style={{margin:'0px 25px'}}>
                  <Link to='/products/add'>Add Product</Link>
                </div>
            
               
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsList: state.productsList
})

export default connect(mapStateToProps, null)(Products)
