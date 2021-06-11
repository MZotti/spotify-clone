import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {

    const routesList = [
        {
            name: "",
            path: "",
            component: "",
        },
        {
            name: "",
            path: "",
            component: "",
        },
    ]

    return (
        <BrowserRouter>
        {
            routesList.map(route => {
                return (
                    <Switch>
                        <Route path={route.path} ></Route>
                    </Switch>
                )
            })
        }
        </BrowserRouter>
    )
}

export default Routes
