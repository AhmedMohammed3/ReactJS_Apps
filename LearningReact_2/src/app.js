import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div><p>ExpenseDashboardPage</p></div>
);

const AddExpensePage = () => (
    <div><p>AddExpensePage</p></div>
);

const EditExpensePage = () => (
    <div><p>EditExpensePage</p></div>
);

const HelpPage = () => (
    <div><p>HelpPage</p></div>
);


const NotFoundPage = () => (
    <div>
        404!
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)


ReactDOM.render(routes, document.getElementById('app'));