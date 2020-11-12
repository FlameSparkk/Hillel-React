import React from 'react';
import moment from 'moment'
import { Image, List } from "semantic-ui-react";
import { Link } from "react-router-dom";


function GistListItem({ gist }) {
  return (
    <List.Item>
      <Image avatar src={gist.owner.avatar_url} />
      <List.Content>
        <List.Header><Link to={`/gists/${gist.id}`}>{gist.owner.login} / {gist.files.map(file => file.filename).join(', ')}</Link></List.Header>
        <List.Description>Updated {moment(gist.updated_at).fromNow()}</List.Description>
      </List.Content>
    </List.Item>
  );
}


function GistList({ gists }) {
  return (
    <List>
      {gists.map(gist => <GistListItem key={gist.id} gist={gist} />)}
    </List>
  );
}

export default GistList;
