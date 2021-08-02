import { useEffect, useState } from 'react';
import useHttp from '../../../hooks/use-http';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const {
		isLoading: isFetchingMeals,
		error: requestError,
		sendRequest: fetchMeals,
	} = useHttp();

	useEffect(() => {
		const loadMeals = (mealsObj) => {
			let loadedMeals = [];
			for (let mealKey in mealsObj) {
				loadedMeals.push({ ...mealsObj[mealKey], id: mealKey });
			}
			setMeals(loadedMeals);
		};
		fetchMeals(
			{
				url: 'https://react-http-913f4-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json',
			},
			loadMeals
		);
	}, [fetchMeals]);

	if (isFetchingMeals) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (requestError) {
		<section>
			<p class={classes.MealsError}>{requestError}</p>
		</section>;
	}
	const mealsList = meals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>{!isFetchingMeals && !requestError && <ul>{mealsList}</ul>}</Card>
		</section>
	);
};

export default AvailableMeals;
