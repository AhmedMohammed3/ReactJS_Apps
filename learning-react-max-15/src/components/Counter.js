import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/slices/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter.counter);
	const showCounter = useSelector(state => state.counter.showCounter);
	console.log(showCounter);

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const incrementByHandler = () => {
		dispatch(counterActions.increase(5));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			{showCounter && (
				<div>
					<button onClick={incrementHandler}>Increment</button>
					<button onClick={incrementByHandler}>Increase By 5</button>
					<button onClick={decrementHandler}>Decrement</button>
				</div>
			)}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

// class Counter extends Component {
// 	incrementHandler() {
// 		// dispatch({ type: 'increment' });
// 		this.props.increment();
// 	}

// 	decrementHandler() {
// 		// dispatch({ type: 'decrement' });
// 		this.props.decrement();
// 	}

// 	toggleCounterHandler() {}
// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button onClick={this.incrementHandler.bind(this)}>Increment</button>
// 					<button onClick={this.decrementHandler.bind(this)}>Decrement</button>
// 				</div>
// 				<button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
// 			</main>
// 		);
// 	}
// }

// const mapStateToProps = state => {
// 	return {
// 		counter: state.counter,
// 	};
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		increment: () => dispatch({ type: 'increment' }),
// 		decrement: () => dispatch({ type: 'decrement' }),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
