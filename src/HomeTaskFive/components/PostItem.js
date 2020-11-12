import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import {Button, Feed, Header, Segment} from 'semantic-ui-react';
import CommentList from './CommentList';

export default function PostItem ({ post }) {
    const [isContentDisplayed, setIsContentDisplayed] = useState(false);
    const [isCommentsShown, setIsCommentsShown] = useState(false);
   
    const onPostClick = () => {
        setIsContentDisplayed(!isContentDisplayed);
    }

    const showComments = (e) => {
        setIsCommentsShown(!isCommentsShown);
        if (e.target.textContent === "Show Comments") {
            e.target.textContent = "Hide Comments";
        }
        else {
            e.target.textContent = "Show Comments";
        };
    }

    return (
        <Segment className="post-segment">
            <Header dividing>User {post.userId} posted:</Header>
            <Feed.Event key={post.id}>
                <Feed.Label>
                    <Link to={`users/${post.userId}`}>
                        <img alt="avatar" src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
                    </Link>
                </Feed.Label>
                <Feed.Content>
                    <Feed.Summary as="a" className="post-title" onClick={onPostClick}>
                        {post.title}
                    </Feed.Summary>
                    {isContentDisplayed && 
                        <Fragment>
                            <Feed.Extra text>
                                {post.body}
                            </Feed.Extra>
                            <br/>
                            <Button onClick={showComments} size="tiny">Show Comments</Button>
                            <br/>
                        </Fragment>
                    }
                    {isContentDisplayed && isCommentsShown && 
                        <Feed.Extra>
                            <CommentList postId={post.id} />
                        </Feed.Extra>
                    }
                </Feed.Content>
            </Feed.Event>
        </Segment>
    )

}