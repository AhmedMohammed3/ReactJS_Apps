import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses.action';

const ExpenseItem = ({ id, description, amount, createdAt, dispatch }) => (
    <div>
        <h3>{description}</h3>
        <p>Amount:{amount} - CreatedAt:{createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ expenseId: id }));
        }}>Remove</button>
    </div>
);


export default connect()(ExpenseItem);