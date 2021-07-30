import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import mealsImage from '../../resources/meals.jpg';
import styles from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={styles.header__}>
                <h1>React Meals</h1>
                <HeaderCartButton itemsNumber={1} />
            </header>
            <div className={styles['header__main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    );
}

export default Header;