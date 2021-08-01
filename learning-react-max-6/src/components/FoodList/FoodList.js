
import styles from './FoodList.module.css';
import FoodItem from "./FoodItem/FoodItem";

const FoodList = ({ foodItems, onAddToCart }) => {

    return (
        <div className={styles['food-list__']}>
            {
                foodItems.map(foodItem => (
                    <FoodItem key={foodItem._id} onAddToCart={onAddToCart} foodItem={foodItem} />
                ))
            }
        </div>
    );

}

export default FoodList;