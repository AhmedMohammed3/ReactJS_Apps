import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/reducers/cart-reducer';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = ({ product }) => {
	const [error, setError] = useState();
	const qtyRef = useRef();
	const { _id, title, price, description } = product;
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		const qtyValue = +qtyRef.current.value;
		if (qtyValue < 1 || qtyValue > 5) {
			setError('Quantity from 1 to 5');
			return;
		}
		dispatch(
			cartActions.addToCart({
				_id,
				title,
				price,
				quantity: qtyValue || 1,
			})
		);
		setError(undefined);
		console.log('Added to cart');
	};

	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<section className={classes.main_section}>
					<p>{description}</p>
					<div className={classes.qty_input}>
						<input
							ref={qtyRef}
							defaultValue='1'
							type='number'
							min='1'
							max='5'
						/>
						{error && <p className={classes.qty_error}>{error}</p>}
					</div>
				</section>
				<div className={classes.actions}>
					<button onClick={addToCartHandler}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
