import React from 'react'
import Home from './Home'

export default function Routes() {
    return (
        <div>
            <Routes path='/' render= {() => <div><Home /></div>} />
            <Routes path='/addProduct' render= {() => <div>add product</div>}/>
            <Routes path='/cart' render= {() => <div>cart</div>}/>
            <Routes path='/orders' render= {() => <div>orders</div>}/>
            <Routes path='/product/:id' render= {() => <div> product</div>}/>
            <Routes path='/login' render= {() => <div>login</div>}/>
        </div>
    )
}
