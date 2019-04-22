export const scBreakdown1 = {
  1: {
    line: `Line 1: import React from "react";`,
    explanations: [
      `This is needed in order for us to use JSX (JavaScript and HTML combined) syntax`
    ]
  },
  2: {
    line: `Lines 3-9: const Person...`,
    explanations: [
      `This is an ES6 function that will render out whatever is in the return. In this case we are returning a <div>`
    ]
  },
  3: {
    line: `Line 11: export default Person;`,
    explanations: [
      `In order to import this component from another file, we must declare that it is being exported`
    ]
  }
};

export const scBreakdown2 = {
  1: {
    line: `Line 4:  import Person from "./Person";`,
    explanations: [
      `Import statement of the stateless component we made in the previous step`
    ]
  },
  2: {
    line: `Line 11:  <Person />`,
    explanations: [
      `This is how we render out the component that we have made, it's similar to how you render any other html tag`
    ]
  }
};

export const statefulBreakdown1 = {
  1: {
    line: `Line 1:  import React, { Component } from "react";`,
    explanations: [
      `The {Component} import statement is needed when we declare a stateful React class`
    ]
  },
  2: {
    line: `Line 3: class Counter extends Component`,
    explanations: [
      `When creating a stateful component, we must initialize the component as a class that extends Component`,
      `This gives us access to state and the React lifecycle methods`
    ]
  },
  3: {
    line: `Line 4:  state = {};`,
    explanations: [
      `Stateful components, as the name suggests, uses state. But in order to use state, we must first declare it like this`
    ]
  },
  4: {
    line: `Line 16: export default Counter;`,
    explanations: [
      `In order to import this component from another file, we must declare that it is being exported`
    ]
  }
};

export const statefulBreakdown2 = {
  1: {
    line: `Line 5:  import Counter from "./Counter";`,
    explanations: [
      `Import statement of the stateful component we made in the previous step`
    ]
  },
  2: {
    line: `Line 14:  <Counter />`,
    explanations: [
      `This is how we render out the component that we have made, it's similar to how you render any other html tag`
    ]
  }
};

export const stateBreakdown1 = {
  1: {
    line: `Line 4:  state = { currentNumber: 0 };`,
    explanations: [
      `This is how we add a new key, pair value to the state. This is the same as any other regular object`
    ]
  },
  2: {
    line: `Line 9: <p>{this.state.currentNumber}</p>`,
    explanations: [
      `Similar to using props, we can access state properties using this.state.PROPERTY_NAME`
    ]
  }
};

export const stateBreakdown2 = {
  1: {
    line: `Lines 6-8:  increment = () => { console.log("Hello World" };`,
    explanations: [
      `This function will print out "Hello World" to the browsers console when invoked`,
      `ES6 introduced the concept of arrow functions, which is just a cleaner way of creating javascript functions`
    ]
  },
  2: {
    line: `Line 14: <button onClick={this.increment}>...</button>`,
    explanations: [
      `This allows us to hook into the onClick event and set it to our newly created function`
    ]
  }
};

export const stateBreakdown3 = {
  1: {
    line: `Line 7-9:  this.setState({ currentNumber: this.state.currentNumber + 1 });`,
    explanations: [
      `The this.setState() function is how we change our state in a React Component`,
      `The setState function expects an object to be passed in as an argument. The object contains what we want to change the state to`,
      `To increment the currentNumber value, we set currentNumber to itself (this.state.currentNumber) + 1`
    ]
  }
};
