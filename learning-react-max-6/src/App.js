import { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';

import FoodList from "./components/FoodList/FoodList";
import Header from "./components/Header/Header";
import OverPage from "./components/OverPage/OverPage";


function App() {
  const [foodItems,] = useState(foodItemsDefault);

  const foodItemsDefault = [
    {
      _id: uuid(),
      title: 'Food1',
      description: 'Food1 Desc',
      price: 25
    },
    {
      _id: uuid(),
      title: 'Food2',
      description: 'Food2 Desc',
      price: 25
    }];

  const addToCartHandler = cartItem => {

  }

  return (
    <Fragment>
      <Header />
      <OverPage />
      <FoodList foodItems={foodItems} onAddToCart={addToCartHandler} />
    </Fragment>
  );
}

export default App;
