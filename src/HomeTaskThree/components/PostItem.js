import React, {Fragment, useState} from 'react';
import {Button, Feed} from 'semantic-ui-react';
import CommentList from './CommentList';

export default function PostItem ({ post, ...rest }) {
    const [isContentDisplayed, setIsContentDisplayed] = useState(false);
    const [isCommentsShown, setIsCommentsShown] = useState(false);
   
    const onPostClick = () => {
        setIsContentDisplayed(!isContentDisplayed);
        rest.onPostClick(post);
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
        <Feed.Event key={post.id}>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Feed.Content>
                <Feed.Summary className="post-title" onClick={onPostClick}>
                <a>{post.title}</a>
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
    )

}