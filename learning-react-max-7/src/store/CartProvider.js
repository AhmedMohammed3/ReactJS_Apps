import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (curState, action) => {
	if (action.type === 'ADD') {
		const totalAmount =
			curState.totalAmount + action.item.price * action.item.amount;
		const existingCartItemIdx = curState.items.findIndex(
			(item) => item.id === action.item.id
		);
		const existingCartItem = curState.items[existingCartItemIdx];
		let items;
		if (existingCartItem) {
			const item = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};
			items = curState.items;
			items[existingCartItemIdx] = item;
		} else {
			items = [...curState.items, action.item];
		}
		return {
			items,
			totalAmount,
		};
	}
	if (action.type === 'REMOVE') {
		const existingItemIdx = curState.items.findIndex(
			(item) => item.id === action.id
		);
		const existingItem = curState.items[existingItemIdx];
		const totalAmount = curState.totalAmount - existingItem.price;
		let items;
		if (existingItem.amount === 1) {
			items = curState.items.filter((item) => item.id !== action.id);
		} else {
			items = curState.items;
			items[existingItemIdx] = {
				...existingItem,
				amount: existingItem.amount - 1,
			};
		}
		return {
			items,
			totalAmount,
		};
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({
			type: 'ADD',
			item,
		});
	};

	const removeItemToCartHandler = (id) => {
		dispatchCartAction({
			type: 'REMOVE',
			id,
		});
	};

	const clearCartHandler = () => {
		dispatchCartAction({
			type: 'CLEAR',
		});
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
		clearCart: clearCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
