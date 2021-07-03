import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Playlists from '../../components/Playlists/Playlists';
import Podcasts from '../../components/Podcasts/Podcasts';
import Artists from '../../components/Artists/Artists';
import Discs from '../../components/Discs/Discs';

const Collection = () => {

    const routesList = [
        {
            name: "playlists",
            path: "/biblioteca/playlists",
            component: <Playlists />,
        },
        {
            name: "podcasts",
            path: "/biblioteca/podcasts",
            component: <Podcasts />,
        },
        {
            name: "artists",
            path: "/biblioteca/artistas",
            component: <Artists />,
        },
        {
            name: "artists",
            path: "/biblioteca/albuns",
            component: <Discs />,
        },
        {
            name: "playlists",
            path: "/biblioteca/",
            component: <Playlists />,
        },
    ]

    console.log(routesList);

    return (
        <div className="view">
            <Switch>
                {
                    routesList.map(route => {
                        return (
                            <Route key={route.name} path={route.path} >{route.component}</Route>
                        )
                    })
                }
            </Switch>
        </div>
    )
}

export default Collection
