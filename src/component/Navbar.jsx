import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from './UseContext'

function Navbar() {
    const { cart } = useContext(cartContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    E-Commerce
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item fw-medium ">
                            <Link to="/" className="nav-link text-white">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/card" className="nav-link text-white">
                                Cart Products
                            </Link>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success text-white">
                        Cart <span className="badge bg-danger">{cart.length}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar