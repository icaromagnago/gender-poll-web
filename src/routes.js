import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Obrigado from './pages/Obrigado';
import PollResult from './pages/PollResult';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/obrigado" component={Obrigado} />
            <Route path="/result" component={PollResult} />
        </Switch>
    );
}