import React from 'react';


// we want an extra prop on the component
// and this prop is just the string 'magic'
export function withMagicProp(Component) {
  return class WithMagicProp extends React.Component {
    render() {
      return (
        // This will add new magic prop into the Component
        // {...this.props} makes sure you do not lose any of the original props from the Component
        <Component {...this.props} magic='magic' />
      );
    }
  };
}

export function withAuthCheck(Component) {

}


// this is used all over the place
// we cant just modift it
// many people expect the original behaviour
function logNumber(num) {
  // 20 lines of code
  return `number ${num}`;
}


// this would be bad
function improvedLogNumber(num) {
  // 20 lines of code!! <- these lines are the same!
  // you are reusing the same thing logNumber function provides with some additional stuff
  return `This is the wonderfull ${num}`
}

// HOC takes functon and returns 'improved' functions
// without messing with the internals of the function
function withImprovement(func) {
  return function improved(num) {
    return `This is the wonderfull ${func(num)}`;
  };
}

// log the men and the better
const meh = logNumber;
const better = withImprovement(meh);

console.log(meh(12));
console.log(better(12));


// AN EXAMPLE

// implement a greet function

function greet(name) {
  return `Hello ${name}`;
}

console.log(greet('Tom')); // would result Hello, Tom
// 2 step - implement an improver called withShouting

function improver(func) {
  return function improvedFunc(name) {
    return func(name).toUpperCase();
  };
}

const improvedGreet = improver(greet);
console.log(improvedGreet('Tom')); // would result in HELLO, TOM
