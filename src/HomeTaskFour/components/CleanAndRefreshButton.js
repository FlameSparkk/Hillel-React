import React from 'react'
import { Button, Header, Segment } from 'semantic-ui-react'

export default function CleanAndRefreshButton() {
    const cleanAndRefresh = () => {
        window.localStorage.clear();
        document.location.reload();
    }

    return (
        <Segment compact>
            <Header dividing>Press button to clean local storage and refresh the page</Header>
            <Button onClick={cleanAndRefresh}>Forced Page Refresh</Button>
        </Segment>
    )
}
