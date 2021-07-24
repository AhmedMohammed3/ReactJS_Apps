import React from 'react';
import ExpenseListFilters from './expense-list-filters';

import ExpensesList from './expenses-list';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpensesList />
    </div>
);

export default ExpenseDashboardPage;