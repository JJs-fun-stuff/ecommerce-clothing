// any utility function related to cart redux code

export const addItemToCart = (cartItems, cartItemToAdd) =>{
    // cartItems is an array
    // find = first item found based on condition 

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id )

    if(existingCartItem){
        // map return new array
        console.log("existings cart items category")
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity+1}
            : cartItem
            )
    }
    console.log("new cart items category")

    return [...cartItems, {...cartItemToAdd, quantity:1}]
}