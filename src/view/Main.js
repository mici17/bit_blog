import React from 'react';
import { HomePage } from './Home/Homepage';
import { Route, Switch } from "react-router-dom";
import { AboutPage } from './About/AboutPage'
import { AuthorsPage } from './Authors/AuthorsPage'
import { SinglePost } from './SinglePost/SinglePost'
import { SingleAuthor } from './SingleAuthor/SingleAuthor';



const Main = (post) => {
    return (
        <main>
            <Switch>
                <Route path={"/post/:id"} component={SinglePost} />
                <Route path={"/author/:id"} component={SingleAuthor} />
                <Route path="/authors" component={AuthorsPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </main>
    )
}
export { Main }