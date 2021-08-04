import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/reducers/cart-reducer';
import classes from './CartItem.module.css';

const CartItem = ({ item }) => {
	const { _id, title, quantity, total, price } = item;
	const dispatch = useDispatch();

	const decreaseQtyHandler = () => {
		dispatch(cartActions.decreaseItemQty(_id));
		console.log('decreased');
	};

	const increaseQtyHandler = () => {
		dispatch(cartActions.increaseItemQty(_id));
		console.log('increased');
	};

	const removeItemHandler = () => {
		dispatch(cartActions.removeCartItem(_id));
	};

	return (
		<li className={classes.item}>
			<div className={classes.pre_header}>
				<button className={classes.remove_btn} onClick={removeItemHandler}>
					&#10006;
				</button>
			</div>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{' '}
					<span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={decreaseQtyHandler}>-</button>
					<button onClick={increaseQtyHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
