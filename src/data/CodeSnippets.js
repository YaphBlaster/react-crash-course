export const repo = "https://github.com/YaphBlaster/react-playground.git";

export const scCode1 = `import React from "react";
 
const Person = () => {
  return (
    <div>
      Hi I'm YOUR_NAME and I like WHAT_YOU_LIKE
    </div>
  );
};
 
export default Person;`;

export const scCode2 = `import React, { Component } from "react";
import "./App.css";
 
import Person from "./Person";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Person />
        </header>
      </div>
    );
  }
}
 
export default App;
`;

export const pCode1 = `import React from "react";
 
const Person = (props) => {
  return (
    <div>
     Hi I'm {props.name} and I like {props.whatILike}
    </div>
  );
};
 
export default Person;`;

export const pCode2 = `import React, { Component } from "react";
import "./App.css";
 
import Person from "./Person";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Person name="Yaphet" whatILike="to party" />
        </header>
      </div>
    );
  }
}
 
export default App;`;

export const statefulCode1 = `import React, { Component } from "react";
 
class Counter extends Component {
  state = {};
  
  render() {
    return (
      <div>
        <p>0</p>
        <button>My Button</button>
      </div>
    );
  }
}
 
export default Counter;`;

export const statefulCode2 = `import React, { Component } from "react";
import "./App.css";
 
import Person from "./Person";
import Counter from "./Counter";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Person name="Yaphet" whatILike="to party" />
          <Person name="Yaphet's Evil Twin" whatILike="to ruin parties" />
          <Counter />
        </header>
      </div>
    );
  }
}
 
export default App;`;

export const statefulCode3 = `mport React, { Component } from "react";
 
class Counter extends Component {
  state = {};
 
  render() {
    return (
      <div>
        <p>0</p>
        <button >{this.props.buttonText}</button>
      </div>
    );
  }
}
 
export default Counter;`;

export const statefulCode4 = `import React, { Component } from "react";
import "./App.css";
 
import Person from "./Person";
import Counter from "./Counter";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Person name="Yaphet" whatILike="to party" />
          <Person name="Yaphet's Evil Twin" whatILike="to ruin parties" />
          <Counter buttonText="Click Me!"/>
        </header>
      </div>
    );
  }
}
 
export default App;`;

export const stateCode1 = `import React, { Component } from "react";
 
class Counter extends Component {
  state = { currentNumber: 0 };
 
  render() {
    return (
      <div>
        <p>{this.state.currentNumber}</p>
        <button >{this.props.buttonText}</button>
      </div>
    );
  }
}
 
export default Counter;`;

export const stateCode2 = `import React, { Component } from "react";
 
class Counter extends Component {
  state = { currentNumber: 0 };
 
  increment = () => {
   console.log("Hello World");
  };
 
  render() {
    return (
      <div>
        <p>{this.state.currentNumber}</p>
        <button onClick={this.increment}>{this.props.buttonText}</button>
      </div>
    );
  }
}
 
export default Counter;`;

export const stateCode3 = `import React, { Component } from "react";
 
class Counter extends Component {
  state = { currentNumber: 0 };
 
  increment = () => {
    this.setState({
      currentNumber: this.state.currentNumber + 1
    });
  };
 
  render() {
    return (
      <div>
        <p>{this.state.currentNumber}</p>
        <button onClick={this.increment}>{this.props.buttonText}</button>
      </div>
    );
  }
}
 
export default Counter;`;
