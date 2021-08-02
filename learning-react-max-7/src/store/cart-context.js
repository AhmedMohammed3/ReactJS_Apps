const React = require('react');

const cartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
	clearCart: () => {},
});

export default cartContext;
