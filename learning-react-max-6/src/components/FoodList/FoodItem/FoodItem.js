import { useState } from 'react';

import styles from './FoodItem.module.css'
import React from 'react';

const FoodItem = ({ foodItem, onAddToCart }) => {
    const [qty, setQty] = useState(1);

    const qtyChangeHandler = e => {
        if (e.target.value > 0 || e.target.value === '')
            setQty(e.target.value);
    }

    const addToCartHandler = e => {
        e.preventDefault();
        if (qty < 1 || qty === '') {
            console.log('Qty wrong: ', qty)
            return;
        }
        onAddToCart({
            _id: foodItem._id,
            title: foodItem.title,
            price: foodItem.price,
            qty
        });
    }

    return (
        <div className={styles['food-item__']}>
            <div className={styles['food-item__left-side']}>
                <p className={styles['food-item__left-side__title']}>{foodItem.title}</p>
                <p className={styles['food-item__left-side__desc']}>{foodItem.description}</p>
                <p className={styles['food-item__left-side__price']}>${foodItem.price}</p>
            </div>
            <form className={styles['food-item__right-side']}>
                <div className={styles['food-item__right-side__amount']}>
                    <label className={styles['food-item__right-side__amount__text']}>Amount</label>
                    <input className={
                        styles['food-item__right-side__amount__input']}
                        type="text"
                        size={1}
                        value={qty}
                        onChange={qtyChangeHandler} />
                </div>
                <button onClick={addToCartHandler} className={styles['food-item__right-side__add-btn']}>+ Add</button>
            </form>
        </div>
    );
}

export default FoodItem;