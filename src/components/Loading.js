import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <Container>
      <ReactLoading type="spinningBubbles" color="#000" height={'20%'} width={'20%'} />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  margin-top: 4rem;
  text-align: center;
  display: flex;
  justify-content: center;
`
