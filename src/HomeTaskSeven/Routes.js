import React  from "react";
import { Container, Header } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink, Route, Switch, Link } from "react-router-dom";
import NotFoundPage from "../dz4/blog-v2/containers/404";
import Gists from "./containers/Gists";

export default function Routes() {
  return (
    <Container className='page'>
      <Router>
        <Header>
          <NavLink to='/' activeClassName='active-nav'>Gists App</NavLink>
        </Header>
        <Switch>
          <Route path='/' exact>
            This is a gist explorer <Link to='/gists'>click here</Link> to see gists
          </Route>
          <Route path='/gists' component={Gists} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </Container>
  )
}
