import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../Redux/action'

class AddProduct extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            productName:'',
            mainImage:'',
            price:'',
            category:'',
            description:'',
            stock:'In stock',
            id:''
        }
    }

    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

  handleClick() {
    this.props.addProduct(this.state)
    alert('Product is added')
  }

    render(){
        const {productName, mainImage, price, category, description, id} = this.state
        
        return (
            <div>
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
                {/* <div style={{margin:'15px'}}>
                    <select  name='category' value={category} onChange={this.handleChange}>
                        <option>category</option>
                        <option value='Mobile'>Mobile</option>
                        <option value='Laptop'>Laptop</option>
                    </select>
                </div> */}
                 <div style={{margin:'15px'}}>
                    <label>Category: </label>
                    <input  name='category' value={category} onChange={this.handleChange}/>
                </div>
                <div style={{margin:'15px'}}>
                   <button onClick={()=> this.handleClick()}>submit</button>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
    
// })

const mapDispatchToProps = dispatch => ({
    addProduct: (payload) => dispatch(addProduct(payload))
})

export default connect(null,mapDispatchToProps)(AddProduct)
