import React from 'react';
import {Link, Switch} from 'react-router-dom';

import Home from './components/Home';
import Bins from './components/Bins';


export default(
<Switch>
    <Link exact path="/" component={Home} />
    <Link path= "/bins/:id" component={Bins} />
</Switch>
)