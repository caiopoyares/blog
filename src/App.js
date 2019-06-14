import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import styled from 'styled-components';

import ScrollToTop from './components/ScrollToTop';
import BlogPosts from './components/BlogPosts';
import Post from './components/Post';
import Home from './components/Home';
import Profile from './components/Profile';

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <AppContainer>
            <StyledNavbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/blog" exact component={BlogPosts} />
              <Route path="/blog/:postId" component={Post} />
              <Route path="/author/:authorID" component={Profile} />
            </Switch>
          </AppContainer>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

const AppContainer = styled.div`
  margin: 0 auto;
  background-color: #f7f7f7;
`

const NavStyles = {
  display: 'flex',
  borderBottom: '1px solid #ccc'
}

const LogoStyles = {
  marginRight: 'auto',
  marginLeft: 0,
  borderBottom: 'none'
}

const Navbar = ({ className }) => {
  return (
    <div className={className} style={NavStyles}>
      <StyledLink to="/" style={LogoStyles}>R+C</StyledLink>
      <StyledLink to="/" exact className={className}>Home</StyledLink>
      <StyledLink to="/blog" exact className={className}>Blog</StyledLink>
    </div >

  )
}

const StyledLink = styled(NavLink)`
  padding: 1rem;
  color: #333;
  font-weight: 800;
  font-size: .8rem;
  text-transform: uppercase;
  &:first-child {
    margin-left: auto;
  }
`

const StyledNavbar = styled(Navbar)`
  background-color: white;
  text-align: right;
  padding-right: 1rem;
  border-bottom: 2px solid transparent;

  .active {
    border-bottom: 2px solid black;
    transition: border-bottom .4s;
  }
`