import React, { Component, Fragment } from 'react';
import { Button, Card, Image, Dimmer, List, Loader, Header } from 'semantic-ui-react';
import "./AuthorInfo.css";

export default class AuthorInfo extends Component {

    state = {
        userData: null,
        albums: null,
        isFetching: false,
        isAlbumsFetching: false,
        isAlbumsDisplayed: false,
    };

    componentDidMount() {
        this.fetchUserData();
        this.fetchAlbumsData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.authorId !== this.props.authorId && this.props.authorId !== null) {
            this.fetchUserData();
            this.fetchAlbumsData();
        }
    }

    fetchUserData() {
        const { authorId } = this.props;
        if (!authorId) return;
        this.setState({ isFetching: true });
        fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
        .then(response => response.json())
        .then(userData => this.setState({ userData, isFetching: false }))
        .catch(err => this.setState({ isFetching: false }))
    }

    fetchAlbumsData() {
        const { authorId } = this.props;
        if (!authorId) return;
        this.setState({ isAlbumsFetching: true });
        fetch(`https://jsonplaceholder.typicode.com/users/${authorId}/albums`)
        .then(response => response.json())
        .then(albums => this.setState({ albums, isAlbumsFetching: false }))
        .catch(err => this.setState({ isAlbumsFetching: false }))
    }

    showAlbums = (e) => {
        const {isAlbumsDisplayed} = this.state;
        this.setState({isAlbumsDisplayed: !isAlbumsDisplayed});
        if (e.target.textContent === "Show Albums") {
            e.target.textContent = "Hide Albums";
        }
        else {
            e.target.textContent = "Show Albums";
        };
    };

  render() {
    const { userData, albums, isFetching, isAlbumsFetching, isAlbumsDisplayed } = this.state;
    if (userData === null || albums === null) return null;
    return (
        <Card className="author-info">
            <Dimmer active={isFetching || isAlbumsFetching}>
                <Loader active={isFetching || isAlbumsFetching} />
            </Dimmer>
            <Image src="https://as1.ftcdn.net/jpg/01/88/76/42/500_F_188764296_3CrfibwvnwGS4WXPjNqwLXCG15NFrilk.jpg" wrapped ui={false} />
            <Card.Content>
                <Card.Header>{userData.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Email: {userData.email}</span>
                </Card.Meta>
                <Card.Description>
                    {userData.phone}
                </Card.Description>
                <br/>
                <Card.Content extra>
                    <Button onClick={this.showAlbums} size="tiny">Show Albums</Button>
                </Card.Content>
                <br/>
                <Card.Content extra>
                    {isAlbumsDisplayed && 
                        <Fragment>
                            <Header as='h3' dividing>
                                Albums
                            </Header>
                            <List bulleted>
                                {albums.map(album => (
                                    <List.Item as="a" key={album.id}>{album.title}</List.Item>
                                ))}
                            </List>
                        </Fragment>
                    }
                </Card.Content>
            </Card.Content>
        </Card>
    );
  }
};
