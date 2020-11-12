import React, { useEffect } from 'react';
import { Container, Grid } from "semantic-ui-react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DimmerLoader from "../../dz4/blog-v2/components/DimmerLoader";
import GistList from "../components/GistList";
import { fetchGists } from "../redux/slices/gistsSlice";
import GistFiles from "./GistFiles";
import { getGistLoading, getGists } from "../redux/selectors/gists";

function Gists() {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const gists = useSelector(getGists);
  const isFetching = useSelector(getGistLoading);

  useEffect(() => {
    dispatch(fetchGists());
  }, []);

  return (
    <Container>
      <DimmerLoader active={isFetching} />
      <Grid>
        <Grid.Column width={7}>
          <GistList gists={gists} />
        </Grid.Column>
        <Grid.Column width={9}>
          <Switch>
            <Route path={`${path}/:gistId`} exact>
              <GistFiles />
            </Route>
          </Switch>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Gists;
