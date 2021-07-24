import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './expense-list-item';
import selectExpenses from '../selectors/expenses.selector';

const ExpensesList = (props) => (
    <div>
        <h1>Expense List </h1>
        {props.expenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                {...expense}
            />))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

const ConnectedExpensesList = connect(mapStateToProps)(ExpensesList);

export default ConnectedExpensesList;