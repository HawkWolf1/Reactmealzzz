import React from 'react'
import Imgmeal from '../Assets/meals.jpg'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <header className={classes.header}>
       <div className={classes.headerContainer}>
        <h1 className={classes.title}>React meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </div>
      <img className={classes.image} src={Imgmeal} alt='Myimage' />
    </header>
  )
}

export default Header
