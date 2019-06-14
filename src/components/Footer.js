import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <p>Desenvolvido por <a href="https://caiopoyares.github.io/" rel="noopener noreferrer" target="_blank">Caio Poyares</a></p>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  background: white;
  border-top: 1px solid #ccc;
  padding-bottom: 1rem;

  p {
    margin-bottom: 0;
    font-size: .9rem;
    color: #777;
  }

  a {
    color: #333;
    font-weight: 600;
  }
`
