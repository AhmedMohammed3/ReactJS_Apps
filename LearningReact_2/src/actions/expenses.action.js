import { v4 as uuid } from 'uuid';
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../helpers/constants';

// ADD_EXPENSE
export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
        type: ADD_EXPENSE,
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    });

// REMOVE_EXPENSE
export const removeExpense = ({ expenseId } = {}) => ({
    type: REMOVE_EXPENSE,
    expenseId
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: EDIT_EXPENSE,
    id,
    updates
});