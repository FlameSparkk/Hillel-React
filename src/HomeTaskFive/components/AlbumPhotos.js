import React, { useState, useEffect } from 'react'
import { useParams, Redirect, Link } from 'react-router-dom';
import { Container, Dimmer, Header, Segment, Loader } from 'semantic-ui-react';
import Splide from '../../HomeTaskTwo/components/Splide';
import './AlbumPhotos.css';


export default function AlbumPhotos() {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState(null);
    const [isPhotosFetching, setIsPhotosFetching] = useState(false);
    const [album, setAlbum] = useState(null);
    const [isAlbumFetching, setIsAlbumFetching] = useState(false);
    
    useEffect(() => {
        setIsPhotosFetching(true)
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            .then(response => response.json())
            .then(photos => {
                setPhotos(photos);
                setIsPhotosFetching(false);
            })
    }, [albumId]);

    useEffect(() => {
        setIsAlbumFetching(true)
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
            .then(response => response.json())
            .then(album => {
                setAlbum(album);
                setIsAlbumFetching(false);
            });
    }, [albumId])

    if (isPhotosFetching || isAlbumFetching || photos === null || album === null) return <Dimmer active><Loader size='small'/></Dimmer>;

    if (!album.id) {
        return <Redirect to='/albums'/>
    }


    return (
        <Container>
            <Segment>
                <Header textAlign="center" dividing>Photos from album {albumId} </Header>
                <Header textAlign="center" dividing>
                    Created by <Link to={`/users/${album.userId}`}> User {album.userId} </Link>
                </Header>
            </Segment>
            <Splide>
                {photos.map(photo => (
                    <img src={photo.url} alt={photo.title}/>
                ))}
            </Splide>
        </Container>
    )
}
