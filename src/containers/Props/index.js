import React from "react";

import CodeBlock from "../../components/CodeBlock";
import Screenshot from "../../components/Screenshot";

import { pCode1, pCode2 } from "../../data/CodeSnippets";
import propSetup from "../../assets/images/4 - props setup.png";
import propUsage from "../../assets/images/5 - props usage.png";
import propUsageDevTools from "../../assets/images/5b - props usage dt.png";
import powerOfProps from "../../assets/images/6 - props power.png";
import BottomNav from "../../components/BottomNav";

const Props = () => {
  return (
    <div>
      <h2>Props</h2>

      <h3>Introduction</h3>
      <p>
        Now this is all well and good, you've got a stateless component ready,
        it's displaying your name and what you like to do, but what if you want
        to show off your React skills to your friend by adding their name and
        what they like to the browser? Are you going to make another component
        named "Friend.js" and copy/paste from Person.js? That seems pretty long
        and programmers are pretty lazy person, so that's not gonna fly.
        Luckily, React has a solution to this called <strong>props</strong>.
      </p>

      <p>
        Props (short for properties) make is easier for us to quickly customize
        a component by passing in values that will trickle down to the
        component. If this sounds a little complicated, don't worry, we'll go
        through a practical example right now!
      </p>

      <h3>Setting Up Props</h3>
      <p>Navigate to the Person.js file and perform the following steps:</p>

      <ul>
        <li>
          Explicitly pass in props to the Person function (). We do this in
          order to have access to the props object.
        </li>
        <li>
          Replace your name with <strong>{`{props.name}`}</strong>
        </li>
        <li>
          Replace what you like with <strong>{`{props.whatILike}`}</strong>
        </li>
      </ul>

      <CodeBlock text={pCode1} header="Person.js" />

      <p>
        When you save the Person.js file, your screen should look like this:
      </p>

      <Screenshot source={propSetup} />

      <p>
        Oof, looks like we <em>goof'd.</em> Now our name and what we like isn't
        showing at all! But wait, we're not done yet! Now that we setup the
        skeleton to use our props, we'll have to send them through wherever we
        use a {`<Person /> `} tag, so off to App.js we go.
      </p>

      <h3>Passing Props</h3>
      <p>
        Now that we've setup the Person.js file to receive props, we need to go
        into the App.js file to pass the props through to our instance of the
        Person component.
      </p>

      <p>
        In App.js, find where you are using the {`<Person />`} tag and change it
        to the following. Replace "YOUR_NAME" and "WHAT_YOU_LIKE" with what ever
        you want.
      </p>

      <CodeBlock
        text={`<Person name="YOUR_NAME" whatILike="WHAT_YOU_LIKE" />`}
        hideBar
        hideLines
      />

      <CodeBlock text={pCode2} header="App.js" />

      <p>When you save the file, your screen should look similar to this:</p>

      <Screenshot source={propUsage} />

      <p>
        Pretty neat stuff, right? You can see that the props are being mapped
        through to their respective areas through the passing of key, value
        pairings.
      </p>

      <h4>React Developer Tools</h4>
      <p>
        To see what the props are for a component, we can use the React
        Developer Tools. To open the Dev Tools, perform the following steps:
      </p>
      <ol>
        <li>Press F12 on your browser (or right click and select Inspect)</li>
        <li>Navigate to the tab labeled "React"</li>
        <li>
          In the search bar with the placeholder text of "Search (text or
          /regex/)", type in "Person"
        </li>
        <li>
          Click the {`<Person />`} tag that has the props that you passed in
        </li>
      </ol>
      <p>
        That's it! If you look to the right of the window you can see a
        <strong> Props </strong>
        section with all the key, value information that you passed in. If you
        want to verify that you're looking at the right screen, look at the
        image below:
      </p>
      <Screenshot source={propUsageDevTools} />

      <h3>Power of Props</h3>
      <p>
        So, we're basically at the point where we were before. So what's the big
        deal with props then, right? The big deal comes with the ability of
        being able to quickly make customize-able components via passing props.
        Let's take the example from before. Say you wanted to show your friends
        how cool React is. We can create a new {`<Person />`} tag and simply
        pass in the props to make a new and customized Person. Copy and paste
        the {`<Person/>`} tag you have in App.js and pass new name and whatILike
        values. Don't forget you can use the React Developer Tools to see the
        different props of each Person component. You should see something
        similar to the image below:
      </p>
      <Screenshot source={powerOfProps} />

      <BottomNav
        backRoute="props"
        backTitle="Props"
        forwardRoute="stateful-components"
        forwardTitle="Stateful Components"
      />
    </div>
  );
};

export default Props;
