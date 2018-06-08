import React from 'react';

import {hot} from 'react-hot-loader';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  background: papayawhip;
  padding: 4em;
`;

const App = () => {
  return(
    <Wrapper>
    <Title>
      Hello World, this is my first styled component!
    </Title>
  </Wrapper>
  );
};

export default hot(module)(App);

