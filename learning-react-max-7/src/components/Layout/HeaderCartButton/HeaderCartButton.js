import { useContext, useEffect, useState } from 'react';

import CartIcon from '../../Cart/CartIcon/CartIcon';
import CartContext from '../../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;
    const cartItemsNumber = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    const jsonItems = JSON.stringify(items);
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 50);

        return () => {
            clearTimeout(timer);
        }
    }, [jsonItems, items.length]);

    return (
        <button className={btnClasses} onClick={props.onClick} >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>You Cart</span>
            <span className={classes.badge}>{cartItemsNumber}</span>
        </button>
    )
}

export default HeaderCartButton;