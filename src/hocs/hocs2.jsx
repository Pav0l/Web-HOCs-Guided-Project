import React from 'react';

// ================================================================ Exercise A

// 1- build a HOC called `withTimestamp`
// that provides the wrapped Component with a `timestamp` prop

// 2- edit Container.jsx so it can take advantage of this prop.

// 3- edit App.jsx to wrap Container with the HOC.

export function withTimestamp(Component) {
  // implement
  return class ComponentWithTimestamp extends React.Component {
    render() {
      return (
        // {...this.props} makes sure you do not lose any of the original props from the Component
        <Component {...this.props} timestamp="timestamp" />
      );
    }
  };
}


// ================================================================ Exercise B

// 1- build a HOC called `withRandomNumberGenerator`
// that provides the wrapped Component with a `generateRandomNumber` prop
// which is a function that generates random integers from 0 to 9.

// 2- edit Container.jsx so it can take advantage of this prop.

// 3- edit App.jsx to wrap Container with the HOC.

export function withRandomNumberGenerator(Component) {
  // implement
}


// ================================================================ Exercise C

// 1- build a HOC called `withCounter`
// that provides the wrapped Component with the following props:
//   - a `count` which is a number starting at 0
//   - an `incremement` which is a function that increments the counter by 1.
//   - a `decrement` which is a function that decrements the counter by 1.

// 2- edit Container.jsx so it can take advantage of this prop.

// 3- edit App.jsx to wrap Container with the HOC.

export function withCounter(Component) {
  // implement
  return class ComponentWithCounter extends React.Component {
    state = {
      count: 0,
    }

    increment = () => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }

    decrement = () => {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
      );
    }
  };
}
