import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from './UseContext';

function UseState() {
    const [products, setProducts] = useState([]);
    const { cart, dispatch } = useContext(cartContext);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, []);

    const handleClick = (item) => {
        dispatch({ type: "ADD", payload: { ...item, minimumOrderQuantity: 1 } });
    };

    return (
        <div className="container mt-5 pt-5">
            <h2 className="text-center mb-4">Our Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((item, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100">
                            <img
                                src={item.thumbnail}
                                className="card-img-top"
                                alt={item.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">
                                    {item.description.substring(0, 60)}...
                                </p>
                                <p className="card-text">
                                    <strong>Price:</strong> ${item.price.toFixed(2)}
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    onClick={() => handleClick(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UseState;
