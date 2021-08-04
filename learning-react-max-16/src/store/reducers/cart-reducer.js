import { createSlice } from '@reduxjs/toolkit';
/*
============EXAMPLE Cart item==========
{
    _id: 0,
    title: 'Sushi',
    price: 23,
    total: 23,
    quantity: 2
}
=====================================
 */
const cartInitState = {
	cartItems: [],
	cartNumOfItems: 0,
	cartTotalPrice: 0,
	cartIsVisible: false,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: cartInitState,
	reducers: {
		toggleCart(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
		addToCart(state, { payload: item }) {
			const existingItem = state.cartItems.find(
				cartitem => cartitem._id === item._id
			);
			if (existingItem) {
				existingItem.quantity += item.quantity;
				state.cartNumOfItems += item.quantity;
				existingItem.total += item.quantity * existingItem.price;
				state.cartTotalPrice += item.quantity * existingItem.price;
			} else {
				item.total = item.quantity * item.price;
				state.cartItems.push(item);
				state.cartNumOfItems += item.quantity;
				state.cartTotalPrice += item.total;
			}
		},
		increaseItemQty(state, { payload: _id }) {
			const item = state.cartItems.find(cartItem => cartItem._id === _id);
			item.quantity++;
			item.total += item.price;
			state.cartNumOfItems++;
			state.cartTotalPrice += item.price;
		},
		decreaseItemQty(state, { payload: _id }) {
			const item = state.cartItems.find(cartItem => cartItem._id === _id);
			if (item.quantity > 1) {
				item.quantity--;
				item.total -= item.price;
			} else {
				state.cartItems = state.cartItems.filter(
					cartItem => cartItem._id !== _id
				);
			}
			state.cartNumOfItems--;
			state.cartTotalPrice -= item.total;
		},
		removeCartItem(state, { payload: _id }) {
			const item = state.cartItems.find(cartItem => cartItem._id === _id);
			state.cartTotalPrice -= item.total;
			state.cartNumOfItems -= item.quantity;
			state.cartItems = state.cartItems.filter(
				cartItem => cartItem._id !== _id
			);
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
