import React, { Component, Fragment } from 'react';
import { Feed, Loader } from 'semantic-ui-react';
import PostContent from './PostContent';
import './Posts.css';

export default class Posts extends Component {

  state = {
    posts: [],
    isPostFetching: false,
    selectedPost: null
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
    this.setState({selectedPost: post.id});
    const { onPostSelect } = this.props;
    onPostSelect(post);
  }

  render() {
    const { posts, isPostFetching, selectedPost } = this.state;

    return (
      <Fragment>
        <Loader size='small' active={isPostFetching} />
        <Feed>
            {posts.map(post => (
                <PostItem post={post} />
            ))}
        </Feed>
      </Fragment>
    );
  }
};


 const PostItem = ({ post, ...rest }) => {
 const [isContentDisplayed, setIsContentDisplayed] = useState(false);=
  

const onPostClick = useCallback((post) => {
  setIsContentDisplayed(!isContentDisplayed)
   rest.onPostClick(post)

}, [])

return (

<Feed.Event key={post.id}>
  <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Feed.Content>
          <Feed.Summary className="post-title" onClick={onPostClick}>
          <a>{post.title}</a>
          </Feed.Summary>
            {isContentDisplayed && <Feed.Extra text>
                                {post.body}
                            </Feed.Extra>
            }
           {isContentDisplayed && <CommentList postId={post.id} />}
      </Feed.Content>
</Feed.Event>


)

}
