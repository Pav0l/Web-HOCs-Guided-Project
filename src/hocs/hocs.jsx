import React from 'react';


export function withMagicProp(Component) {
  return class WithMagicProp extends React.Component {
    state = { count: 0 }

    componentDidMount() {
      this.intervalId = setInterval(() => {
        this.setState(st => ({ count: st.count + 1 }));
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.intervalId);
    }

    render() {
      return (
        <Component {...this.props} magicProp={this.state.count} />
      );
    }
  };
}

export function withAuthCheck(Component) {
  return class WithAuthCheck extends React.Component {
    state = {
      isAuthed: false,
    }

    componentDidUpdate() {
      this.checkLogin();
    }

    componentDidMount() {
      this.checkLogin();
    }

    logIn = () => {
      localStorage.setItem('isAuthed', true);
      this.checkLogin();
    }

    logOut = () => {
      localStorage.clear();
      this.checkLogin();
    }

    checkLogin = () => {
      const isAuthed = localStorage.getItem('isAuthed');
      if (isAuthed !== this.state.isAuthed) {
        this.setState({ isAuthed });
      }
    }

    render() {
      if (!this.state.isAuthed) {
        return <button onClick={this.logIn}>Please, log in</button>;
      }
      return (
        <Component
          {...this.props}
          isAuthed={this.state.isAuthed}
          logIn={this.logIn}
          logOut={this.logOut}
        />
      );
    }
  };
}
