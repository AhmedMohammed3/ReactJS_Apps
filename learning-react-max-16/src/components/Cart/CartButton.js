import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { cartActions } from '../../store/reducers/cart-reducer';

const CartButton = props => {
	const dispatch = useDispatch();
	const cartNumOfItems = useSelector(state => state.cart.cartNumOfItems);

	const showCartHandler = () => {
		dispatch(cartActions.toggleCart());
	};
	return (
		<button className={classes.button} onClick={showCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartNumOfItems}</span>
		</button>
	);
};

export default CartButton;
