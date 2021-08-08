import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setLogout } from '../../store/actions/auth.action';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	const dispatch = useDispatch();
	const history = useHistory();

	const logoutHandler = () => {
		dispatch(setLogout());
		history.replace('/auth');
	};

	return (
		<header className={classes.header}>
			<Link to='/'>
				<div className={classes.logo}>React Auth</div>
			</Link>
			<nav>
				{!isLoggedIn && (
					<ul>
						<li>
							<Link to='/auth'>Login</Link>
						</li>
					</ul>
				)}
				{isLoggedIn && (
					<ul>
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
						<li>
							<button onClick={logoutHandler}>Logout</button>
						</li>
					</ul>
				)}
			</nav>
		</header>
	);
};

export default MainNavigation;
