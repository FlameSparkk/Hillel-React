import React, { Component, Fragment } from 'react';
import { Feed, Loader } from 'semantic-ui-react';
import PostItem from './PostItem';
import './Posts.css';

export default class Posts extends Component {

  state = {
    posts: [],
    isPostFetching: false
  };

    componentDidMount() {
        this.setState({ isPostFetching: true });
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            this.setState({ posts, isPostFetching: false })
        })
    }

    handlePostClick = post => {
        const { onPostSelect } = this.props;
        onPostSelect(post);
    }

  render() {
    const { posts, isPostFetching } = this.state;

    return (
      <Fragment>
        <Loader  inline="centered" size='small' active={isPostFetching} />
        <Feed>
            {posts.map(post => ( <PostItem key={post.id} post={post} onPostClick={this.handlePostClick}/> ))}
        </Feed>
      </Fragment>
    );
  }
};
