import Modal from '../UI/Modal/Modal';

import classes from './Cart.module.css';

const Cart = props => {

    const cartItemsDefault = [
        {
            id: 'c1',
            name: 'Sushi',
            amount: 2,
            price: 12.99
        },
        {
            id: 'c2',
            name: 'LOLO',
            amount: 2,
            price: 13.99
        }
    ];

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartItemsDefault
                .map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;