import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/home';
import PortfolioPage from '../components/portfolio';
import PortfolioItemPage from '../components/portfolio-item';
import ContactPage from '../components/contact';
import NotFoundPage from '../components/not-found';
import Header from '../components/header';

const AppRouter = _ => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={PortfolioPage} exact={true} />
                <Route path="/portfolio/:itemId" component={PortfolioItemPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
