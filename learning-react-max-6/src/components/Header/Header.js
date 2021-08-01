import React, { Fragment, useState } from "react";
import { v4 as uuid } from 'uuid';

import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import mealsImage from '../../resources/meals.jpg';
import styles from './Header.module.css';
import Cart from "../Cart/Cart";

const Header = props => {

    const [isCartOpened, setcartOpened] = useState(false);
    const cartItems = [{
        _id: uuid(),
        title: 'item1',
        price: 21,
        qty: 2
    }];

    const openCartHandler = () => {
        setcartOpened(true);
    }

    const closeCartHandler = () => {
        setcartOpened(false);
    }

    const orderClickedHandler = () => {
        console.log('Ordering...');
    }
    return (
        <Fragment>
            <header className={styles.header__}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={openCartHandler} itemsNumber={1} />
            </header>
            <div className={styles['header__main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
            {isCartOpened && <Cart onOrder={orderClickedHandler} onClose={closeCartHandler} cartItems={cartItems} />}
        </Fragment>
    );
}

export default Header;