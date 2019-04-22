import React from "react";
import CodeBlock from "../../components/CodeBlock";
import CodeBreakdown from "../../components/CodeBreakdown";
import Screenshot from "../../components/Screenshot";

import { scCode1, scCode2 } from "../../data/CodeSnippets";
import { scBreakdown1, scBreakdown2 } from "../../data/CodeBreakdowns";
import importPerson from "../../assets/images/importPerson.png";
import BottomNav from "../../components/BottomNav";

const StatelessComponent = () => {
  return (
    <div>
      <h2>Stateless Component</h2>

      <h3>Introduction</h3>
      <p>
        Stateless components are the most basic components that React has, so it
        makes sense to begin with them. A stateless component has, you guessed
        it, no state. This means that the component will not have any
        information that it will be in charge of changing dynamically. We'll
        dive deeper to what state is in a later chapter.
      </p>

      <h3>Creating Your First Stateless Component</h3>
      <p>In order to create a stateless component, follow these steps:</p>
      <ul>
        <li>Create a new file called Person.js in the src directory.</li>
        <li>
          In the newly created Person.js file, write the following lines of code
          and replace YOUR_NAME and WHAT_YOU_LIKE accordingly:
        </li>
      </ul>
      <CodeBlock text={scCode1} header="Person.js" />
      <CodeBreakdown breakdowns={scBreakdown1} />

      <h3>Importing and Rendering your Stateless Component</h3>
      <p>Navigate to the App.js file and perform the following.</p>
      <ul>
        <li>Import your Person component</li>
        <li> Remove all the html markup within the {`<header>`} tag </li>
        <li>Render out Person component inside the {`<header>`} tag</li>
      </ul>
      <CodeBlock text={scCode2} header="App.js" />
      <CodeBreakdown breakdowns={scBreakdown2} />

      <p>
        Woah, look at you go! With finishing your first stateless component,
        your screen should look like the image down below:
      </p>

      <Screenshot source={importPerson} />

      <BottomNav
        backRoute="setup"
        backTitle="Setup"
        forwardRoute="props"
        forwardTitle="Props"
      />
    </div>
  );
};

export default StatelessComponent;
