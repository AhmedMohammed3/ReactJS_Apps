import React, { useState } from 'react';

export const ProductContext = React.createContext({
	productList: [],
	toggleFav: (id) => {}
});
const initialState = [
	{
		id: 'p1',
		title: 'Red Scarf',
		description: 'A pretty red scarf.',
		isFavorite: false
	},
	{
		id: 'p2',
		title: 'Blue T-Shirt',
		description: 'A pretty blue t-shirt.',
		isFavorite: false
	},
	{
		id: 'p3',
		title: 'Green Trousers',
		description: 'A pair of lightly green trousers.',
		isFavorite: false
	},
	{
		id: 'p4',
		title: 'Orange Hat',
		description: 'Street style! An orange hat.',
		isFavorite: false
	}
];

const ProductsProvider = props => {
	const [productList, setProductList] = useState(initialState);

	const toggleFavourite = productId => {
		setProductList(prevProdList => {
			const prodIndex = prevProdList.findIndex(p => p.id === productId);
			const newFavStatus = !prevProdList[prodIndex].isFavorite;
			const updatedProducts = [...prevProdList];
			updatedProducts[prodIndex] = {
				...prevProdList[prodIndex],
				isFavorite: newFavStatus
			};

			return updatedProducts;
		});
	};

	return (
		<ProductContext.Provider
			value={{ productList, toggleFav: toggleFavourite }}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductsProvider;
