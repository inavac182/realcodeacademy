import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

const theme = 'is-dark';
const Router = () => (
    <div id='content' className={theme}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={(props) => <App {...props} theme={theme} />}/>
            </Switch>
        </BrowserRouter>
    </div>
);

export default Router;
