import React from 'react';
import {Route, Switch} from 'react-router-dom';

// import
import Home from './components/Home';
import Bins from './components/Bins';


//export
export default(
    // switch
<Switch>
    {/* route */}
    <Route exact path="/" component={Home} />
    <Route path= "/bins/:id" component={Bins} />
    <Route path="/bin/:name" component={Bins} />
</Switch>
)