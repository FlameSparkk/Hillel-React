import React, { Fragment } from 'react';
import CleanAndRefreshButton from './components/CleanAndRefreshButton';
import DisplayLocalStorageInfo from './components/DisplayLocalStorageInfo';
import OnlineStatusMessage from './components/OnlineStatusMessage';
import PageTitleSetter from './components/PageTitleSetter';
import "./HomeTaskFour.css";

export default function HomeTaskFour() {
    return (
        <Fragment>
            <OnlineStatusMessage/>
            <PageTitleSetter/>
            <DisplayLocalStorageInfo/>
            <CleanAndRefreshButton />
        </Fragment>
    )
}
