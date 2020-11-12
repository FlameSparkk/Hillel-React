import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
import { Container,Segment,Header, Button, Dimmer, Loader, Message } from 'semantic-ui-react';

export default function UserAlbums() {
    const [albums, setAlbums] = useState(null);
    const [userInfo, setInfoUser] = useState(null);
    const [isAlbumFetching, setIsAlbumFetching] = useState(false);
    const [isUserInfoFetching, setIsUserInfoFetching] = useState(false);
    const { userId } = useParams();
    const history = useHistory();

    useEffect(() => {
        setIsAlbumFetching(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then(response => response.json())
        .then(albums => {
            setAlbums(albums);
            setIsAlbumFetching(false);
        })
    }, [userId]);

    useEffect(() => {
        setIsUserInfoFetching(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            setInfoUser(user);
            setIsUserInfoFetching(false);
        })
    }, [userId]);

    if (isAlbumFetching || isUserInfoFetching || albums === null || userInfo === null) {
        return (
            <Dimmer active><Loader size='small'/></Dimmer>
        )
    }

    if (!userInfo.id) {
        return (
            <Message  className="user-albums-error-message-container" negative>
                <Header>No such user albums page exists</Header>
                <br/>
                <Button onClick={() => history.push('/users')}>Go to Users</Button>
                <Button onClick={() => history.push('/albums')}>Go to Albums</Button>
                <Button onClick={() => history.push('/')}>Go Home</Button>
            </Message>
        )
    }

    return (
        <Container>
            <Segment >
                <Header textAlign="center">{userInfo.name} Albums</Header>
            </Segment>
            <Segment>
                {albums.map(album => (
                    <Segment key={album.id}>
                        <Header textAlign="center">Album {album.id}</Header>
                        <Header textAlign="center"> Title: {album.title}</Header>
                        <Link to={`/album/${album.id}/photos`}>
                            <Button textalign="center" fluid>See Photos</Button>
                        </Link>
                    </Segment>
                ))}
            </Segment>
        </Container>
    )
}
