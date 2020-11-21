import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Thanks from './pages/Thanks';
import PollResult from './pages/PollResult';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/result" component={PollResult} />
        </Switch>
    );
}