export const Reducerfun = (state, action) => {
    switch (action.type) {
        case 'ADD':
            if (state.cart.some((product) => product.id === action.payload.id)) {
                alert("the product is already in the cart");
                return state;
            } else {
                return { ...state, cart: [...state.cart, { ...action.payload, minimumOrderQuantity: 1 }] }
            }
        case 'REMOVE':
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload.id)
            }
        case 'INCREMENT':
            return {
                ...state,
                cart: state.cart.map((product) => product.id === action.payload.id ?
                    {
                        ...product,
                        minimumOrderQuantity: product.minimumOrderQuantity + 1
                    } :
                    product)
            }
        case 'DECREMENT':
            return {
                ...state,
                cart: state.cart.map((product) => product.id === action.payload.id ?
                    {
                        ...product,
                        minimumOrderQuantity: product.minimumOrderQuantity > 1 ? product.minimumOrderQuantity - 1 : 1
                    } :
                    product)
            }
        default:
            return state;
    }
}