import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import NotFound from '../containers/NotFound';
import Player from '../components/Player';
import Layout from '../components/Layout';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sign-in" component={SignIn} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/player/:id" component={Player} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;