import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {
	const cartItems = useSelector(state => state.cart.cartItems);
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			{cartItems.length > 0 ? (
				<ul>
					{cartItems.map(cartItem => (
						<CartItem key={cartItem._id} item={cartItem} />
					))}
				</ul>
			) : (
				<p className={classes.empty_cart}>Cart is empty</p>
			)}
		</Card>
	);
};

export default Cart;
