import { showNotification } from '../../helpers/ui.helper';
import { cartActions } from '../reducers/cart-reducer';

export const fetchCartData = () => {
	return dispatch => {
		fetch('http://localhost:1234/cart/cart', {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				if (!res.ok) {
					throw new Error("Couldn't fetch cart data");
				}
				return res.json();
			})
			.then(resData => {
				dispatch(cartActions.replaceCart(resData.cart[0]));
			})
			.catch(err => {
				showNotification('Error Sending Cart To DB', dispatch);
			});
	};
};

export const sendCartData = ({ cartItems, cartNumOfItems, cartTotalPrice }) => {
	return dispatch => {
		fetch('http://localhost:1234/cart/add-item', {
			method: 'PUT',
			body: JSON.stringify({
				cartItems,
				cartNumOfItems,
				cartTotalPrice,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				if (!res.ok) {
					console.log('Error res:', res);
					throw new Error('Saving cart data to DB failed');
				}
			})
			.catch(err => {
				console.log(err);
				showNotification('Error Sending Cart To DB', dispatch);
			});
	};
};
