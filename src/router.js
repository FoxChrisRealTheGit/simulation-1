import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Bins from './components/Bins';


export default(
<Switch>
    <Route exact path="/" component={Home} />
    <Route path= "/bins/:id" component={Bins} />
</Switch>
)