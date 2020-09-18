import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Index from '../screens/'

export default function Routes () {
    return(
        <Switch>
            <Route  path="/" component={Index} />
        </Switch>
    )
}