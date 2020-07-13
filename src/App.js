import React from 'react';
import Home from './screens/Home';
import styled from '@emotion/styled';

const AppStyle = styled.div`
  margin: 0 auto;
  width: 750px;
  padding: 20px;

  & header > h1 {
    text-align: center;
  }
`

function App() {
  return (
    <AppStyle>
      <header className="App-header">
        <h1>React Movie Search</h1>
      </header>
      <main>
        <Home />
      </main>
    </AppStyle>
  );
}

export default App;
