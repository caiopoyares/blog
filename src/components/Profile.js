import React from 'react';
import * as contentful from 'contentful';
import { Link } from 'react-router-dom';

import { Container } from '../styledComponents';
import Loading from './Loading';
import Moment from 'react-moment';
import styled from 'styled-components';


const client = contentful.createClient({
  space: 'yba56vzciesc',
  accessToken: 'Aq4t9YJdFzCmPFHfX4qIKjiAPmQ-RdaeK5kiXVE2RBQ'
});

class Profile extends React.Component {
  state = {}

  componentDidMount() {
    this.fetchAuthorPosts().then(data => {
      const posts = data.map(item => item.fields);
      this.setState({ posts })
    })
  }

  fetchAuthorPosts = () => {
    return client.getEntries({ order: 'sys.createdAt' }).then(entry => (
      entry.items.filter(item => item.sys.contentType.sys.id === 'blogPost' && item.fields.postAuthor === this.props.match.params.authorID)
    ))
  }

  render() {
    console.log(this.state);
    return this.state.posts ? (
      <Container>
        <h2>Os artigos escritos por {this.props.match.params.authorID} são:</h2>
        <div>
          {this.state.posts.map(({ title, subtitle, postImage, postAuthor, postSlug, postDate, postDuration }) => (
            <PostContainer key={postImage.sys.id}>
              <div className="img-box">
                <Link to={`/blog/${postSlug}`}><img src={postImage.fields.file.url} alt="" /></Link>
              </div>
              <div className="post-info">
                <Link to={`/blog/${postSlug}`}><h3>{title}</h3></Link>
                <Link to={`/blog/${postSlug}`}><h4>{subtitle}</h4></Link>
                <p className='post-author'>{postAuthor}</p>
                <p className='post-meta'><Moment format='DD/MM/YY'>{postDate}</Moment> <span>•</span> {postDuration}</p>
              </div>
            </PostContainer>
          ))}
        </div>
      </Container>
    ) : <Loading />
  }
}

export default Profile;


const PostContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 1rem;

  a {
    color: inherit;
  }

  h3,
  h4, 
  p {
    margin: 0;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: .3rem;
  }

  h4 {
    color: #888;
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: .5rem;
  }

  .post-author {
    font-weight: bold;
    color: black;
    margin-bottom: .3rem;
    font-size: .9rem;
  }

  p {
    color: #888;
  }

  .img-box {
    display: none;
    max-width: 275px;
    margin-right: 1rem;
    @media (min-width: 800px) {
    display: block;
    }
  }

  img {
    max-width: 100%;
    border-radius: 2px;
  }

  span {
    font-size: .6rem;
  }

`;