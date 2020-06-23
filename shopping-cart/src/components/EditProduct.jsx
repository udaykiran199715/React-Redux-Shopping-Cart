import React from 'react'
import {editProduct} from '../Redux/action'
import {connect} from 'react-redux'

class EditProduct extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            productName:'',
            mainImage:'',
            price:'',
            category:'',
            description:'',
            stock:'',
            id:Number(this.props.match.params.id)
        }
    }

    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

  handleClick() {
    this.props.editProduct(this.state)
    alert('Product is Updated')
  }

    render(){
        // console.log(this.props.match.params)
        let item = this.props.productsList.find(elem => elem.id === Number(this.props.match.params.id))
// console.log(item)
        const {productName, mainImage, price, stock, category, description} = this.state
        
        return (
            <div>

                <div style={{border:'1px solid black'}}>
                <div >
                    <img className="img-fluid" width="100" height="100" src={item.mainImage} />
                </div>
                <div>Name: {item.productName}</div>
                <div>Price: {item.price}</div>
                <div>Description: {item.description}</div>
                <div>Category: {item.category}</div>
                <div>Stock: {item.stock}</div>
                </div>
                <div style={{margin:'15px'}}>
                    <label>Name: </label>
                    <input name='productName' value={productName} onChange={this.handleChange} />
                </div>
                <div style={{margin:'15px'}}>
                    <label>Image: </label>
                    <input name='mainImage' value={mainImage} onChange={this.handleChange}/>
                </div>
                <div style={{margin:'15px'}}>
                    <label>Price: </label>
                    <input  name='price' value={price} onChange={this.handleChange} />
                </div>
                <div style={{margin:'15px'}}>
                    <label>Description: </label>
                    <input  name='description' value={description} onChange={this.handleChange}/>
                </div>
                <div style={{margin:'15px'}}>
                    <label>Category: </label>
                    <input  name='category' value={category} onChange={this.handleChange}/>
                </div>
                <div style={{margin:'15px'}}>
                    {/* <select  name='category' value={category} onChange={this.handleChange}>
                        <option>category</option>
                        <option value='Mobile'>Mobile</option>
                        <option value='Laptop'>Laptop</option>
                    </select> */}
                      <label>Stock: </label>
                    <input  name='stock' value={stock} onChange={this.handleChange}/>

                </div>
                <div style={{margin:'15px'}}>
                   <button onClick={()=> this.handleClick()}>submit</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    productsList: state.productsList
})

const mapDispatchToProps = dispatch => ({
    editProduct: (payload) => dispatch(editProduct(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)( EditProduct)



