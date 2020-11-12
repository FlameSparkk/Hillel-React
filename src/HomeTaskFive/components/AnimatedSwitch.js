import React from 'react';
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import Users from "./Users";
import Page404 from "./404";
import Albums from './Albums';
import Posts from "./Posts";
import AlbumPhotos from './AlbumPhotos';
import UserAlbums from './UserAlbums';
import { animated, useTransition } from 'react-spring';

const AnimatedSwitch = withRouter(({location}) =>  {

    const transitions = useTransition(location, location => location.key, {
        from: {
        opacity: 0,
        position: 'absolute',
        width: '100%',
        transform: `translate3d(100%, 0, 0)`
        },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: {
        opacity: 0,
        transform: `translate3d(-50%, 0, 0)`
        }
    })
    return (
        transitions.map(({ item, props: transition, key }) => (
            <animated.div key={key} style={transition}>
                <Switch location={item}>
                    <Route path="/" exact>
                        <Posts/>
                    </Route>
                    <Route path="/albums" exact>
                        <Albums/>
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/album/:albumId/photos" exact>
                        <AlbumPhotos/>
                    </Route>
                    <Route path="/albums/user/:userId" exact>
                        <UserAlbums />
                    </Route>
                    <Route path='*'>
                        <Page404 />
                    </Route>
                </Switch>
            </animated.div>
        ))
    )
});

export default AnimatedSwitch;