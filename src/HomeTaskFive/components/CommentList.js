import React, { Fragment, useEffect, useState } from 'react';
import { Comment, Header, Loader } from 'semantic-ui-react';

export default function CommentList({postId}) {
    const [commentList, setCommentList] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        setIsFetching(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                setCommentList(comments)
                setIsFetching(false);
            })
    }, []);

    return (
        <Fragment>
        <Comment.Group>
            <Header as='h3' dividing>
                Comments
            </Header>
            <Loader inline="centered" active={isFetching}/>
                {commentList.map(comment => (
                    <Comment key={comment.id}>
                        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                        <Comment.Content>
                            <Comment.Author as='a'>{comment.email}</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at {comment.id}PM</div>
                            </Comment.Metadata>
                            <Comment.Text>{comment.body}</Comment.Text>
                        </Comment.Content>
                    </Comment>
                ))}
        </Comment.Group>
        </Fragment>
    )
}