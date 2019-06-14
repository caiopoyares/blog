import React, { Component } from 'react';
import * as contentful from 'contentful';
import { Container } from '../styledComponents';
import styled from 'styled-components';


import PostThumbNail from './PostThumbnail';
import Footer from './Footer';
import Loading from './Loading';

class BlogPosts extends Component {
  state = {
    posts: null
  }

  client = contentful.createClient({
    space: 'yba56vzciesc',
    accessToken: 'Aq4t9YJdFzCmPFHfX4qIKjiAPmQ-RdaeK5kiXVE2RBQ'
  });

  componentDidMount() {
    this.fetchBlogPosts();
  }

  fetchBlogPosts = () => {
    this.client.getEntries({ order: 'sys.createdAt' }).then(entry => (
      entry.items.filter(item => item.sys.contentType.sys.id === 'blogPost')
    )).then(data => {
      const posts = data.map(item => item.fields);
      this.setState({ posts })
    })
  }

  render() {
    return (
      <>
        <Container>
          {this.state.posts ? (
            <Grid>
              {this.state.posts.map(post =>
                <PostThumbNail info={post} key={post.postSlug} />
              )}
            </Grid>
          ) : (
              <Loading />
            )}
        </Container>
        <Footer />
      </>
    )
  }
}

export default BlogPosts;



const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 800px) {
    grid-template-columns : 1fr 1fr 1fr;
    & > div:first-child {
    grid-column: 1 / 4;
  }
  }
`