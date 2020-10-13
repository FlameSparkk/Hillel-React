import React from 'react';
import { Message, Icon, Header, Segment } from 'semantic-ui-react';
import useOnlineStatus from '../hooks/useOnlineStatus';

export default function OnlineStatusMessage() {
    const online = useOnlineStatus();

    if (online) return (
        <Segment compact>
            <Header dividing>Online status</Header>
            <Message compact icon positive>
                <Icon name='check' />
                <Message.Header>You are online, great!</Message.Header>
            </Message>
        </Segment>
    )
    else return (
        <Segment compact>
            <Header dividing>Online status</Header>
            <Message compact icon negative>
                <Icon name='exclamation circle' />
                <Message.Header>You are offline, check connection!</Message.Header>
            </Message>
        </Segment> 
    )
}