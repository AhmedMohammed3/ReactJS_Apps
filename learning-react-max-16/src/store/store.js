import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-reducer';

const store = configureStore({ reducer: cartReducer });

export default store;
