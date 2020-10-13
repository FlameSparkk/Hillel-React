import React, { Fragment, useEffect, useState } from 'react';
import { Dimmer, Comment, Header, Loader } from 'semantic-ui-react';

// function randomNum(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// const photos = {
//     1: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
//     2: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
//     3: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
//     4: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
//     5: 'https://react.semantic-ui.com/images/avatar/small/matthew.png'
// }

// <Comment.Avatar src={photos[comment.id]} />

// <Comment.Avatar src={photos[randomNum(1, 5)]} />

// Пытался сделат красиво чтобы фотки всегда разные были , получилось при помощи функции с рандомным числом
// Но с ней каждый раз менялись фотки как только компонент перезагружался - не порядок, решил оставить тут, может потом поиграюсь

export default function CommentList({postId}) {
    const [commentList, setCommentList] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        setIsFetching(true);
        console.log(isFetching);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                setCommentList(comments)
                setIsFetching(false);
                console.log(isFetching);
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
