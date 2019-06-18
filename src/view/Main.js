import React from 'react';
import { HomePage } from './Home/Homepage';
import { Route, Switch } from "react-router-dom";


const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" component={HomePage} />
            </Switch>
        </main>
    )
}
export { Main }