import React from "react";

import CodeBlock from "../../components/CodeBlock";
import CodeBreakdown from "../../components/CodeBreakdown";

import {
  statefulCode1,
  statefulCode2,
  statefulCode3,
  statefulCode4
} from "../../data/CodeSnippets";
import {
  statefulBreakdown1,
  statefulBreakdown2
} from "../../data/CodeBreakdowns";
import InfoBlock from "../../components/InfoBlock";
import BottomNav from "../../components/BottomNav";

const StatefulComponents = () => {
  return (
    <div>
      <h2>Stateful Components</h2>
      <h3>Introduction</h3>
      <p>
        Stateful components are another way of creating React components. These
        components grant us access to not only a state to store values specific
        to this instance, but also to React's component{" "}
        <a href="https://reactjs.org/docs/react-component.html#the-component-lifecycle">
          lifecycle
        </a>
        . State is used to dynamically change a components properties and allows
        us run logic against those changes.
      </p>

      <h3>Creating A Stateful Component</h3>
      <p>In order to create a stateful component, follow these steps:</p>
      <ul>
        <li>Create a new file called Counter.js in the src directory</li>
        <li>
          In the newly created Counter.js file, write the following lines of
          code
        </li>
      </ul>
      <CodeBlock text={statefulCode1} header="Counter.js" />
      <CodeBreakdown breakdowns={statefulBreakdown1} />

      <h3>Importing and Rendering your Stateful Component</h3>
      <p>Navigate to the App.js file and perform the following steps:</p>
      <p>Import your Counter component</p>
      <ul>
        <li>Import your Counter component </li>
        <li>Render out the Counter component inside the {`<header> `}tag</li>
      </ul>
      <p>Your code should look similar to this:</p>
      <CodeBlock text={statefulCode2} header="App.js" />
      <InfoBlock
        header="<Person> tags"
        content="You don't have to use the same <Person> elements as above, you can leave the ones you made in the previous section"
      />
      <CodeBreakdown breakdowns={statefulBreakdown2} />

      <h3>BONUS ROUND: Props In Stateful Components</h3>
      <p>
        Let's take a second to use some of our knowledge of props in a stateful
        component. Before I let you loose on the code, there are a couple of
        differences to note when using props in stateful components.
      </p>
      <ul>
        <li>
          Stateful components do not require you to explicitly pass in props as
          we did in our stateless component.
        </li>
        <li>
          Props can be instantly accessible via "this.props" as we are accessing
          the props attribute from the Component object.
        </li>
        <li>
          Instead of <strong>props.name</strong>, we use{" "}
          <strong>this.props.name</strong>.
        </li>
      </ul>
      <p>
        So now that you have the basics of props in stateful components, try
        adding a buttonText prop to the {`<button />`} tag in Counter.js. I'll
        put the code below if you're having trouble, but only use it as a last
        resort!
      </p>
      <CodeBlock text={statefulCode3} header="Counter.js" />
      <CodeBlock text={statefulCode4} header="App.js" />

      <BottomNav
        backRoute="props"
        backTitle="Props"
        forwardRoute="state"
        forwardTitle="State"
      />
    </div>
  );
};

export default StatefulComponents;
