
import { Fragment } from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ cartItem }) => {

    const increaseQtyHandler = e => {
        console.log('Increase');
    }

    const decreaseQtyHandler = e => {
        console.log('Decrease');
    }

    return (
        <Fragment>
            <div className={styles['cart-item__']}>
                <div className={styles['cart-item__left-side']}>
                    <p className={styles['cart-item__left-side__title']}>{cartItem.title}</p>
                    <div className={styles['cart-item__left-side__bottom']}>
                        <p className={styles['cart-item__left-side__bottom__price']}>${cartItem.price}</p>
                        <div className={styles['cart-item__left-qty']}>x{cartItem.qty}</div>
                    </div>
                </div>
                <div className={styles['cart-item__right-side']}>
                    <button
                        className={styles['cart-item__right-side__btn']}
                        onClick={decreaseQtyHandler}>--</button>
                    <button
                        className={styles['cart-item__right-side__btn']}
                        onClick={increaseQtyHandler}>+</button>
                </div>
            </div>
        </Fragment>
    );
}

export default CartItem;