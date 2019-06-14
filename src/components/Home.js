import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <HomeContainer>
      <h1>Olá, seja bem-vindo ao blog.</h1>
      <h3>Criado com ReactJS + Contentful</h3>
      <p>Esse blog foi criado com o intuito de testar a integração do Contentful com o React. Todos os posts do blog são criados na plataforma da Contentful, um Headless CMS e exibidos automaticamente aqui via API. Isso posibilita que até pessoas que não entendem sobre desenvolvimento web e programação possam criam contéudo e atualizar o blog sozinhas. Tudo isso sem precisar escrever uma linha de código.</p>
      <StyledLink to='/blog'>Conheça o blog</StyledLink>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 4rem;
  min-height: calc(100vh - 50px);
  max-width: 650px;
  margin-right: auto;
  margin-left: auto;


  h1 {
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: .5rem;
    color: #333;
  }

  h3 {
    margin: 0 auto 1.4rem 0;
    font-size: 1.5rem;
    color: #999;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8rem;
    margin-top: 0;
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  align-self: flex-start;
  text-transform: uppercase;
  background-color: transparent;
  font-size: .9rem;
  color: crimson;
  padding: 1rem;
  font-weight: 600;
  border: 2px solid crimson;
`

