import React, { useEffect, useState } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom'
import { Button, Card, Dimmer, Header, Icon, Loader, Segment } from "semantic-ui-react";


function UserDetails() {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState(null);
    const [isuserDataFetching, setIsuserDataFetching] = useState(false);

    useEffect(() => {
        setIsuserDataFetching(true)
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(user => {
                setUserDetails(user);
                setIsuserDataFetching(false);
            })
    }, [userId]);

    if (isuserDataFetching || userDetails === null) return <Dimmer active><Loader size='small'/></Dimmer>;

    if (!userDetails.id) {
        return <Redirect to='/users'/>
    }

    return (
        <Segment compact className='user-details-page'>
            <Header dividing>User #{userId} Details</Header>
            <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header={userDetails.name}
                meta={userDetails.company.name}
                description={userDetails.email}
            />
            <Button>
                <Link to={`/albums/user/${userId}`}>{userDetails.name} Albums</Link>
            </Button>
        </Segment>
    );
}

export default UserDetails;
