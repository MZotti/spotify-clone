import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from '../../views/Home/Home';
import Collection from '../../views/Collection/Collection';
import Artist from '../../views/Artist/Artist';

const Routes = () => {

    const routesList = [
        {
            name: "collection",
            path: "/biblioteca",
            component: <Collection />,
        },
        {
            name: "artist",
            path: "/artista/:slug",
            component: <Artist />,
        },
        {
            name: "",
            path: "",
            component: <Home />,
        },
    ]
    
    console.log(routesList);

    return (
        <>
            <Switch>
                {
                    routesList.map(route => {
                        return (
                            <Route key={route.name} path={route.path}>{route.component}</Route>
                        )
                    })
                }
            </Switch>
        </>
    )
}

export default Routes
