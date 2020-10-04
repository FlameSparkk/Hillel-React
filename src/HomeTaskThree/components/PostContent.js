import React, { Component, Fragment } from 'react';
import {Feed, Loader} from 'semantic-ui-react';

export default class PostContent extends Component {

    state = {
        post: null,
        isBodyFetching: false
    }

    componentDidMount() {
        this.fetchPostData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.postId !== this.props.postId && this.props.postId !== null) {
            this.fetchPostData();
        }
    }

    fetchPostData = () => {
        const { postId } = this.props;
        if (!postId) return;
        this.setState({isBodyFetching: true});
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(post => this.setState({ post, isBodyFetching: false }))
    }

    render() {
        const { post, isBodyFetching } = this.state;
        
        if (post === null) return null;
        return (
            <Fragment>
                <Loader active={isBodyFetching} />
                <Feed.Extra text>
                    {post.body}
                </Feed.Extra>
            </Fragment>
        )
    }
};
