import React, { Fragment, useState, useEffect } from 'react'
import PostItem from './PostItem';
import { Loader, Feed, Segment, Header, Divider } from 'semantic-ui-react'

export default function Posts() {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching ] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => { 
                setPosts(posts);
                setIsFetching(false); 
            })
    }, []);

    return (
        <Fragment>
            <Segment >
                <Header textAlign="center">Blog V2</Header>
                <Divider/>
                <Header textAlign="center">Posts</Header>
            </Segment>
            <Fragment>
                <Loader  inline="centered" size='small' active={isFetching} />
                <Feed className="feed">
                    {posts.map(post => ( <PostItem key={post.id} post={post}/> ))}
                </Feed>
            </Fragment>
        </Fragment>
    )
}
