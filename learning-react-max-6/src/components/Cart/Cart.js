
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './Cart.module.css';
import CartItem from './CartItem/CarItem';


const Backdrop = ({ onClose }) => {
    return <div className={styles['cart__backdrop']} onClick={onClose} />;
}

const CartModal = ({ cartItems, onClose, onOrder }) => {
    let totalPrice = 0;
    cartItems.forEach(item => {
        totalPrice += item.qty * item.price;
    });
    return (
        <div className={styles['cart__']}>
            <div>
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem._id} cartItem={cartItem} />
                ))}
            </div>
            <footer>
                <div className={styles['cart__footer__total-price']}>
                    <p>Total Amount</p>
                    <p>${totalPrice}</p>
                </div>
                <div className={styles['cart__footer__actions']}>
                    <button
                        className={` ${styles['cart__btn']} ${styles['cart__close-btn']}`}
                        onClick={onClose}>Close</button>
                    <button
                        className={` ${styles['cart__btn']} ${styles['cart__order-btn']}`}
                        onClick={onOrder}>Order</button>
                </div>
            </footer>
        </div>
    );
}


const Cart = ({ cartItems, onClose, onOrder }) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, document.getElementById('backdrop-root'))}
            {
                ReactDOM.createPortal(
                    <CartModal
                        cartItems={cartItems}
                        onClose={onClose}
                        onOrder={onOrder} />
                    , document.getElementById('cart-modal-root'))
            }
        </Fragment>
    );

}

export default Cart;