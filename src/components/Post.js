import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'react-moment';
import * as contentful from 'contentful';
import Markdown from 'markdown-to-jsx';

import { Container } from '../styledComponents';
import Footer from './Footer';
import Loading from './Loading';

class Post extends Component {
  state = {
    post: null
  }

  client = contentful.createClient({
    space: 'yba56vzciesc',
    accessToken: 'Aq4t9YJdFzCmPFHfX4qIKjiAPmQ-RdaeK5kiXVE2RBQ'
  });

  componentDidMount() {
    this.fetchSinglePost();
  }

  fetchSinglePost = () => {
    this.client.getEntries().then(entry => (
      entry.items.filter(item => item.sys.contentType.sys.id === 'blogPost' && item.fields.postSlug === this.props.match.params.postId)[0].fields
    )).then(post => {
      this.setState({ post })
    })
  }

  render() {
    return this.state.post ? (
      <>
        <StyledContainer>
          <PostImage src={this.state.post.postImage.fields.file.url} alt={this.state.post.postImage.fields.description} />
          <h1>{this.state.post.title}</h1>
          <h3>{this.state.post.subtitle}</h3>
          <Link to={`/author/${this.state.post.postAuthor}`}><h4>{this.state.post.postAuthor}</h4></Link>
          <p className='post-meta'><Moment format='DD/MM/YY'>{this.state.post.postDate}</Moment> <span>•</span> {this.state.post.postDuration}</p>
          <Markdown>{this.state.post.content}</Markdown>
        </StyledContainer >
        <Footer />
      </>
    ) : <Loading />
  }
}

const StyledContainer = styled(Container)`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media (min-width: 800px) {
    margin-top: 1rem;
    margin-bottom: 4rem;
  }

  h1 {
      margin-top: .4rem;
      margin-bottom: .2rem;
      font-size: 2rem;
    }
  h3 {
    font-size: 1.2rem;
    color: #888;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: .8rem;
  }
  h4 {
    color: #000;
    font-size: .9rem;
    margin-top: 0;
    margin-bottom: .2rem;
  }

  .post-meta {
    color: #777;
    font-size: .9rem;
    margin-top: 0;
    margin-bottom: 2rem;
    span {
      display: inline-flex;
      align-items: center;
      font-size: .6rem;
      line-height: .9rem;
    }
  }
`



const PostImage = styled.img`
  width: 100%;
  max-width: 100%;
`


export default Post;