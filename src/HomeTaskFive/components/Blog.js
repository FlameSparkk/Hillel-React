import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Users from "./Users";
import Page404 from "./404";
import UserDetails from "./UserDetails";
import Albums from './Albums';
import Posts from "./Posts";
import AlbumPhotos from './AlbumPhotos';
import { Menu, Button } from 'semantic-ui-react';
import UserAlbums from './UserAlbums';
import AnimatedSwitch from './AnimatedSwitch';

function Blog() {
  return (
    <Router>
        <div className="menu-container">
            <Menu fixed="top" stackable>
                <Menu.Item>
                    <img alt="react" src='../../../public/logo192.png' />
                </Menu.Item>
                <Menu.Item link> 
                    <NavLink exact activeClassName='active' to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item link> 
                    <NavLink exact activeClassName='active' to="/albums">Albums</NavLink>
                </Menu.Item>
                <Menu.Item link> 
                    <NavLink activeClassName='active' to="/users">Users</NavLink>
                </Menu.Item>
            </Menu>
        </div>
        <AnimatedSwitch/>
        {/* <Switch>
            <Route path="/" exact>
                <Posts/>
            </Route>
            <Route path="/albums" exact>
                <Albums/>
             </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/users/:userId" exact>
                <UserDetails />
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
        </Switch> */}
    </Router>
  );
}

export default Blog;
