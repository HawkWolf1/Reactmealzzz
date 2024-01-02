import React, { useContext } from 'react'
import classes from './Mealitem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../Store/Cart-context'

function Mealitem(props) {
    let CartCtx = useContext(CartContext)
    let price=`Rs ${props.price.toFixed(2)}`

    let addToCarthandler = amount=>{
      CartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
    }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCarthandler}/>
      </div>
    </li>
  )
}

export default Mealitem
