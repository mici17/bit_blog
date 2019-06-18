import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer'
import { Main } from './Main'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
}

export { App }