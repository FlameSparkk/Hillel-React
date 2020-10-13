import React from 'react'
import { Header, Input, Segment } from 'semantic-ui-react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function DisplayLocalStorageInfo() {
    const [name, setName] = useLocalStorage('name', 'Name');

    return (
        <Segment compact>
            <Header dividing>Local Storage Value</Header>
            <p>
                <span>Name in local storage is </span>
                <strong>{name}</strong>
            </p>
            <Input value={name} onChange={(e) => setName(e.target.value)}/>
        </Segment>
    )
}
