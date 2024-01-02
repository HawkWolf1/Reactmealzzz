import React from 'react'
import classes from './MealsSummary.module.css'

function MealsSummary() {
  return (
    <section className={classes.summary}>
        <h2>Delicious Food delivered to you...</h2>
        <p>
            Choose your delicious meal from our broad selection of available meals and enjoy
            a delicious lunch/dinner at home.
        </p>
        <p>
            All our meals are cooked with high-quality ingredients, just in time and 
            of-course by well qualified chefs.
        </p>
    </section>
  )
}

export default MealsSummary
