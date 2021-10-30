import React from 'react';
import { Route, Switch } from 'react-router';
import { Navigation } from './components/Navigation';
import { About, Home, Product, Contact } from './view';

export const App: React.FC = () => {
    return (<>
        <Navigation />
        <main>
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/about"} component={About} />
                <Route exact path={"/product"} component={Product} />
                <Route exact path={"/contact"} component={Contact} />
            </Switch>
        </main>
    </>);
}
