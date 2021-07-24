import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses.reducer";
import filtersReducer from "../reducers/filters.reducer";

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    );

    return store;
}