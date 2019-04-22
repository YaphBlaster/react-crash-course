import React, { Component } from "react";
import "./App.css";

import { Route, Link, NavLink } from "react-router-dom";

import Home from "./containers/Home";
import Setup from "./containers/Setup";
import StatelessComponents from "./containers/StatelessComponents";
import Props from "./containers/Props";
import StatefulComponents from "./containers/StatefulComponents";
import State from "./containers/State";

import { addBackToTop } from "vanilla-back-to-top";

import styled from "styled-components/macro";
import { Icon, Header } from "semantic-ui-react";

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  a {
    margin: 15px;
  }
`;

const HomeHeader = styled(Header)`
  padding: 15px !important;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  > div {
    width: 100%;
  }
`;

class App extends Component {
  render() {
    addBackToTop();
    return (
      <div className="App">
        <Link to="/">
          <HomeHeader as="h2" icon textAlign="center" inverted color="blue">
            <Icon name="react" color="blue" inverted size="huge" />
            <Header.Content>React Crash Course</Header.Content>
          </HomeHeader>
        </Link>

        <Navbar>
          <NavLink activeClassName="active-link" to="/setup">
            Setup
          </NavLink>
          <NavLink activeClassName="active-link" to="/stateless-components">
            Stateless Components
          </NavLink>
          <NavLink activeClassName="active-link" to="/props">
            Props
          </NavLink>
          <NavLink activeClassName="active-link" to="/stateful-components">
            Stateful Components
          </NavLink>
          <NavLink activeClassName="active-link" to="/state">
            State
          </NavLink>
        </Navbar>
        <Content>
          <Route path="/setup" component={Setup} />
          <Route path="/stateless-components" component={StatelessComponents} />
          <Route path="/props" component={Props} />
          <Route path="/stateful-components" component={StatefulComponents} />
          <Route path="/state" component={State} />
          <Route exact path="/" component={Home} />
        </Content>
      </div>
    );
  }
}

export default App;
