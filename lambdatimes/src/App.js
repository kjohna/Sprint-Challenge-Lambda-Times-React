import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';
import authenticate from './components/authentication/auth';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <ConditionalRender />
    </div>
  );
}

const ConditionalRender = authenticate(Content)(Login);

export default App;
