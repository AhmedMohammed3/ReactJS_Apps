import React from 'react';
import { connect } from 'react-redux';

import { editExpense, removeExpense } from '../actions/expenses.action';
import ExpenseForm from './expense-form';

const EditExpensePage = ({ expense, dispatch, history }) => {
    return (
        <div>
            <ExpenseForm
                expense={expense}
                onSubmit={(outExpense) => {
                    dispatch(editExpense(expense.id, outExpense));
                    history.push('/');
                }}
            />
            <button onClick={() => {
                dispatch(removeExpense({ expenseId: expense.id }));
                history.push('/');
            }}>Remove</button>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.expenseId)
    }
}

export default connect(mapStateToProps)(EditExpensePage);