import React from "react"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to='/'>Shopping</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="products">Products </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="cart">Cart </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="orders">Orders </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="login">Login </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;