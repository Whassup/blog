import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Article } from './Pages/Article/Article';
import { Home } from './Pages/Home/Home';

const App: FunctionComponent = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/blog/about">
                        {/* <About /> */}
                    </Route>
                    <Route exact path="/blog/article/:article">
                        <Article />
                    </Route>
                    <Route exact strict={false} path={'/blog'}>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
