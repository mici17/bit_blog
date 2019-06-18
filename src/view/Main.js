import React from 'react';
import { HomePage } from './Home/Homepage';
import { Route, Switch } from "react-router-dom";
import { AboutPage } from './About/AboutPage'
import { AuthorsPage } from './Authors/AuthorsPage'


const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/authors" component={AuthorsPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </main>
    )
}
export { Main }