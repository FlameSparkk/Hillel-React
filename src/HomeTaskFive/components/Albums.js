import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container,Segment,Header, Button, Dimmer, Loader } from 'semantic-ui-react';

export default function Albums() {

    const [albums, setAlbums] = useState(null);
    const [isAlbumsFetching, setIsAlbumsFetching] = useState(false)

    useEffect(() => {
        setIsAlbumsFetching(true)
        fetch(`https://jsonplaceholder.typicode.com/albums`)
        .then(response => response.json())
        .then(albums => {
            setAlbums(albums);
            setIsAlbumsFetching(false);
        })
    }, []);

    if (isAlbumsFetching ||  albums === null ) return <Dimmer active><Loader size='small'/></Dimmer>;

    return (
        <Container>
            <Segment >
                <Header textAlign="center">Albums</Header>
            </Segment>
            <Segment>
                {albums.map(album => (
                    <Segment key={album.id}>
                        <Header textAlign="center">
                            Album {album.id} , Posted by <Link to={`/users/${album.userId}`}>User {album.userId}</Link> 
                        </Header>
                        <Header textAlign="center"> Title: {album.title}</Header>
                        <Link to={`album/${album.id}/photos`}>
                            <Button textalign="center" fluid>See Photos</Button>
                        </Link>
                    </Segment>
                ))}
            </Segment>
        </Container>
    )
}
