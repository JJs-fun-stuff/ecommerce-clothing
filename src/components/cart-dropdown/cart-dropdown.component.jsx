import React from "react";
import "./cart-dropdown.styles.scss";

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items" >
      {
        cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem} />) )
      }
      </div>
    <CustomButton>GO to Checkout</CustomButton>
  </div>
);


// cart variable can be whatever name you want
const mapStateToProps = (state) =>({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);