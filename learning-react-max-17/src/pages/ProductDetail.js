import { useParams } from 'react-router-dom';

const ProductDetail = () => {
	const { productId } = useParams();
	return (
		<section>
			<h1>Product Detail</h1>
			<p> {productId}</p>
		</section>
	);
};

export default ProductDetail;
