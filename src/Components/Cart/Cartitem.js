import React from 'react'
import classes from './Cartitem.module.css'
function Cartitem(props) {
  const price = `Rs ${props.price.toFixed(2)}`
  return (
    <li className={classes['cart-item']}>
    <div>
      <h2>{props.name}</h2>
      <div className={classes.summary}>
      <span className={classes.price}>{price}</span>
      <span className={classes.amount}>{props.amount}</span>
      </div>
    </div>
    <div>
      <button className={classes.action} onClick={props.onRemove}>-</button>
      <button className={classes.action} onClick={props.onAdd}>+</button>
    </div>
    </li>
  )
}

export default Cartitem
