import React from 'react';


export default function withMagicProp(Component) {
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
