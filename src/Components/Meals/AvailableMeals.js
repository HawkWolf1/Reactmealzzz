import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card.js'
import MealItem from './Mealitem.js';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chicken Curry',
      description: 'Tender chicken pieces in a flavorful curry sauce.',
      price: 14.99,
    },
    {
      id: 'm2',
      name: 'Vegetable Biryani',
      description: 'Fragrant rice cooked with mixed vegetables and aromatic spices.',
      price: 12.99,
    },
    {
      id: 'm3',
      name: 'Paneer Tikka Masala',
      description: 'Paneer cubes in a creamy tomato-based curry sauce.',
      price: 15.99,
    },
    {
      id: 'm4',
      name: 'Dal Tadka',
      description: 'Lentils cooked with cumin, mustard seeds, and aromatic spices.',
      price: 9.99,
    },
    {
      id: 'm5',
      name: 'Samosa Chaat',
      description: 'Crunchy samosas topped with chutneys, yogurt, and spices.',
      price: 8.99,
    },
  ];
  
 
  function AvailableMeals() {
    const mealList = DUMMY_MEALS.map(meal => (
      <MealItem key={meal.id} name={meal.name} id={meal.id} description={meal.description} price={meal.price}/>
    ));
    
   return <section className={classes.meals}>
    <Card>
    <ul>{mealList}</ul>
    </Card>
   
</section>
 }
 
 export default AvailableMeals
 
  