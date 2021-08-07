import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useEffect, useState } from 'react';

const Products = props => {
	const [productsList, setProductsList] = useState([]);
	useEffect(() => {
		fetch('http://localhost:1234/product/getproducts')
			.then(res => {
				if (!res.ok) {
					throw new Error('Cannot fetch products');
				}
				return res.json();
			})
			.then(resData => {
				setProductsList(resData.items);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{productsList.map(product => (
					<ProductItem key={product._id} product={product} />
				))}
			</ul>
		</section>
	);
};

export default Products;
