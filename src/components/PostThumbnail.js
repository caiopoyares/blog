import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'react-moment';

function PostThumbnail(props) {
  const { title, subtitle, postSlug, postDate, postDuration, postImage, postAuthor } = props.info;
  return (
    <Thumbnail>
      <div>
        <Link to={`/blog/${postSlug}`}>
          <img src={postImage.fields.file.url} alt={postImage.fields.description} />
        </Link>
      </div>
      <div className='post-info'>
        <Link to={`/blog/${postSlug}`}><h1>{title}</h1>
          <h3>{subtitle}</h3></Link>
        <Link to={`/author/${postAuthor}`}><h4>{postAuthor}</h4></Link>
        <p><Moment format='DD/MM/YY'>{postDate}</Moment> <span>•</span> {postDuration}</p>
      </div>
    </Thumbnail >
  )
}

export default PostThumbnail;


const Thumbnail = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #e3e3e3;
  h1 {
      margin-top: 0;
      margin-bottom: .2rem;
      font-size: 1.6rem;
    }
  h3 {
    font-size: 1.1rem;
    color: #888;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: .9rem;
    margin-top: 0;
    margin-bottom: .1rem;
  }
  img {
    margin-bottom: .5rem;
  }
  p {
    margin-top: 0;
    font-size: .9rem;
    color: #777;
    margin-bottom: 0;
  }
  p > span {
    font-size: .7rem;
    line-height: 1rem;
  }
  @media (min-width: 800px) {
    &:first-child {
    display: flex;
    .post-info {
      min-width: calc(30% + 1rem);
      padding-left: 1rem;
    }
  }
  }

  a {
    color: #333;
  }
  img {
    max-width: 100%;
    width: 100%;
    display: block;

  }

`