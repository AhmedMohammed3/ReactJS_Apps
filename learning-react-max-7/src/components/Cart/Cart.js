import { Fragment, useContext, useState } from 'react';

import classes from './Cart.module.css';

import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem/CartItem';
import Checkout from './Checkout/Checkout';

const Cart = (props) => {
	const [isCheckOut, setIsCheckOut] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);
	const cartCtx = useContext(CartContext);

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const orderHandler = () => {
		setIsCheckOut(true);
	};

	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true);
		try {
			const res = await fetch(
				'https://react-http-913f4-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
				{
					method: 'POST',
					body: JSON.stringify({
						user: userData,
						orderedItems: { ...cartCtx },
					}),
				}
			);

			if (!res.ok) {
				throw new Error('Something went wrong');
			}

			setIsSubmitting(false);
			setDidSubmit(true);
			cartCtx.clearCart();
		} catch (err) {
			console.log(err);
		}
	};

	const hasItems = cartCtx.items.length > 0;
	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					price={item.price}
					amount={item.amount}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	const ModalActions = (
		<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={props.onClose}>
				Close
			</button>
			{hasItems && (
				<button className={classes.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);

	const cartModalContent = (
		<Fragment>
			<div className={`${isCheckOut && classes.combiner}`}>
				<div className={`${isCheckOut && classes.combiner__cartItems}`}>
					{cartItems}
					{hasItems && (
						<div className={classes.total}>
							<span>Total Amount</span>
							<span>${cartCtx.totalAmount.toFixed(2)}</span>
						</div>
					)}
					{!hasItems && (
						<p className={classes['empty-cart']}>No Items In Cart</p>
					)}
				</div>
				{isCheckOut && (
					<Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
				)}
			</div>
			{!isCheckOut && ModalActions}
		</Fragment>
	);

	const isSubmittingModalContent = <p>Sening Order Data...</p>;

	const didSubmitModalContent = (
		<Fragment>
			<p>Successfully send the order!</p>
			<div className={classes.actions}>
				<button className={classes.button} onClick={props.onClose}>
					Close
				</button>
			</div>
		</Fragment>
	);

	return (
		<Modal onClose={props.onClose}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmit && didSubmitModalContent}
		</Modal>
	);
};

export default Cart;
