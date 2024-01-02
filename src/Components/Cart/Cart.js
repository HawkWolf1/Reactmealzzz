import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../Store/Cart-context'
import CartItem from './Cartitem'

function Cart(props) {
  const CartCtx = useContext(CartContext)
  const totalAmount = `Rs ${CartCtx.totalAmount.toFixed(2)}`
  const hasItems = CartCtx.items.length>0

  const CartItemAddHandler = item=>{
    CartCtx.addItem({...item, amount:1})
  }
  const CartitemRemoveHandler = id=>{
    CartCtx.removeItem(id)
  }

    const cartItems = (
        <ul className={classes['cart-items']}>
          {CartCtx.items.map((item)=>(
                <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={CartitemRemoveHandler.bind(null, item.id)} onAdd={CartItemAddHandler.bind(null, item)}/>
          ))}

        </ul>
    )
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span> {totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
