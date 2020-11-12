import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container, List, Image, Grid, GridColumn, Segment, Header } from "semantic-ui-react";
import UserDetails from "./UserDetails";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(users => setUsers(users))
    }, []);

    const { path, url } = useRouteMatch();

    return (
        <Container>
            <Segment >
                <Header textAlign="center">Users</Header>
            </Segment>
            <Grid columns={2}>
                <GridColumn>
                    <Segment>
                        <Header dividing>Users</Header>
                        <List>
                            { users.map(user => (
                                <List.Item key={user.id}>
                                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                                    <List.Content>
                                        <List.Header>
                                            <Link to={`${path}/${user.id}`}>{user.name}</Link>
                                        </List.Header>
                                        <List.Description>
                                            {user.email}, {user.phone}
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            )) }
                        </List>
                    </Segment>
                </GridColumn>
                <GridColumn>
                <Switch>
                    <Route path={`${path}/:userId`} exact>
                        <UserDetails />
                    </Route>
                </Switch>
                </GridColumn>
            </Grid>
        </Container>
    );
}

export default Users;
