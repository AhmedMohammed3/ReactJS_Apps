import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { addExpense } from './actions/expenses.action';
import { setTextFilter } from './actions/filters.action';
import getVisibleExpenses from './selectors/expenses.selector';
import AppRouter from './routers/app.router';
import configureStore from './store/configureStore';

// import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1625133600000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));