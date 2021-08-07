import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notifications';
import { fetchCartData, sendCartData } from './store/actions/cart-actions';

let isInitial = true;

function App() {
	const dispatch = useDispatch();

	const cartIsVisible = useSelector(state => state.cart.cartIsVisible);

	const cart = useSelector(state => state.cart);
	const { cartItems, cartNumOfItems, cartTotalPrice, changed } = cart;

	const notif = useSelector(state => state.notif);

	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		if (changed) {
			dispatch(sendCartData({ cartItems, cartNumOfItems, cartTotalPrice }));
		}
	}, [cartItems, cartNumOfItems, cartTotalPrice, changed, dispatch]);
	return (
		<Fragment>
			{notif.isVisible && (
				<Notification msg={notif.msg || 'Test'} title={notif.title} />
			)}
			<Layout>
				{cartIsVisible && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
