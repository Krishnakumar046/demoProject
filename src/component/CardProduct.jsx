import React, { useContext } from "react";
import { cartContext } from "./UseContext";

function CardProduct() {
    const { cart, dispatch } = useContext(cartContext);

    const handleRemove = (item) => dispatch({ type: "REMOVE", payload: item });
    const handleIncrease = (item) => dispatch({ type: "INCREMENT", payload: item });
    const handleDecrease = (item) => dispatch({ type: "DECREMENT", payload: item });

    const totalItems = cart.reduce((sum, item) => sum + item.minimumOrderQuantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.minimumOrderQuantity, 0);

    return (
        <div className="container mt-5 pt-5">
            <h2 className="text-center mb-4">Your Cart</h2>
            {cart.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {cart.map((item, index) => (
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
                                    <div className="d-flex  flex-wrap justify-content-between align-items-center  gap-3">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() => handleDecrease(item)}
                                            >
                                                -
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-light"
                                            >
                                                {item.minimumOrderQuantity}
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() => handleIncrease(item)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleRemove(item)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <h5>Your cart is empty!</h5>
                </div>
            )}
            {cart.length > 0 && (
                <div className="mt-4 text-center">
                    <h4>
                        Total Items: {totalItems} | Total Price: ${totalPrice.toFixed(2)}
                    </h4>
                </div>
            )}
        </div>
    );
}

export default CardProduct;
