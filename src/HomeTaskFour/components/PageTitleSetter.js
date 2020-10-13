import React, { useState } from 'react';
import { Input, Header, Segment } from 'semantic-ui-react';
import useDocumentTitle from '../hooks/useDocumentTitle ';


export default function PageTitleSetter() {
    const [title, setTitle] = useState(document.title);
    useDocumentTitle(title);

    const handleInput = (e) => {
        setTitle(e.target.value);
    }

    return (
        <Segment compact>
            <Header dividing>Type your text below and it'll become the page title</Header>
            <Input type="text" placeholder="Type Titile" value={title} onChange={handleInput}/>
        </Segment>
    )
}
