import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import { retrieveStoredToken } from './helpers/http.helper';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { sendLoginRequest } from './store/actions/auth.action';

function App() {
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	const dispatch = useDispatch();

	useEffect(() => {
		const tokenData = retrieveStoredToken();
		if (tokenData) {
			const { idToken, expirationTime } = tokenData;
			if (idToken) {
				console.log('Token');
				dispatch(sendLoginRequest(idToken, expirationTime));
			}
		}
	}, [dispatch]);

	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<Route path='/auth'>
					{!isLoggedIn ? <AuthPage /> : <Redirect to='/' />}
				</Route>
				<Route path='/profile'>
					{isLoggedIn ? <UserProfile /> : <AuthPage redirectTo='/profile' />}
				</Route>
				<Route path='*'>
					<p>Page Not Found</p>
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
