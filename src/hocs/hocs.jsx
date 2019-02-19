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
      const isAuthed = localStorage.getItem('isAuthed');
      if (isAuthed !== this.state.isAuthed) {
        this.setState({ isAuthed });
      }
    }

    componentDidMount() {
      const isAuthed = localStorage.getItem('isAuthed');
      this.setState({ isAuthed });
    }

    logIn = () => localStorage.setItem('isAuthed', true)

    logOut = () => localStorage.clear()

    render() {
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
