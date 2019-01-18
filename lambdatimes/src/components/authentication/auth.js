import React from 'react';

const authenticate = Content => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        user: ""
      }
    }

    componentDidMount() {
      const user = localStorage.getItem('LambdaTimesUser');
      if (user) {
        this.setState({
          loggedIn: true,
          user: user
        });
      };
    }

    render() {
      if(this.state.loggedIn) return <Content />;
      return <Login />
    }
  }

export default authenticate;