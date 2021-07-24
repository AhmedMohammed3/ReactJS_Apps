import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../helpers/constants';

// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return [...state, action.expense];
        case REMOVE_EXPENSE:
            return state.filter(({ id }) => id !== action.expenseId)
        case EDIT_EXPENSE:
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                return expense;
            })
        default:
            return state;
    }
};