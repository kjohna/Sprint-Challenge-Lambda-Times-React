import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';
import authenticate from './components/authentication/auth';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    if(localStorage.getItem('LambdaTimesUser')) {
      this.setState({
        loggedIn: true
      });
    }
  }

  handleLogout = () => {
    // console.log("handleLogout");
    localStorage.removeItem('LambdaTimesUser');
    window.location.reload();
  }
  
  render() {
    return (
      <div className="App">
        <TopBar loggedIn={this.state.loggedIn} handleLogout={this.handleLogout}/>
        <Header />
        <ConditionalRender />
      </div>
    );
  }
}

const ConditionalRender = authenticate(Content)(Login);

export default App;
