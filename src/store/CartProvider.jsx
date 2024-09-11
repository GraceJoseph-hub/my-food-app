import React, { useReducer } from 'react'
import CartContext from './cartContext'


const defaultCartState = {
  cartIsShown: false,
}


const cartReducer = (state, action) => {
    if (action.type === 'SHOW_CART') {
      return {
        ...state,
        cartIsShown: true
      }
    }
    if (action.type === 'HIDE_CART') {
      return {
        ...state,
        cartIsShown: false
      }
    }

    return defaultCartState
  }

const CartProvider = ({children}) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState)

  const showModal = () => {
    dispatch({type : 'SHOW_CART'})
  }

  const hideModal = () => {
    dispatch({type: 'HIDE_CART'})
  }

  const cartContext = {
    cartIsShown: cartState.cartIsShown,
    showModal: showModal,
    hideModal: hideModal,
  }
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider