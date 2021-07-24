import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/dashboard';
import AddExpensePage from '../components/create-expense';
import EditExpensePage from '../components/edit-expense';
import HelpPage from '../components/help';
import NotFoundPage from '../components/not-found';
import Header from '../components/header';

const AppRouter = _ => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:expenseId" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
