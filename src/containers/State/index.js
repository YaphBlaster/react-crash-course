import React from "react";
import CodeBlock from "../../components/CodeBlock";
import CodeBreakdown from "../../components/CodeBreakdown";
import Screenshot from "../../components/Screenshot";

import { stateCode1, stateCode2, stateCode3 } from "../../data/CodeSnippets";
import {
  stateBreakdown1,
  stateBreakdown2,
  stateBreakdown3
} from "../../data/CodeBreakdowns";

import stateUsage from "../../assets/images/stateUsageDT.png";
import stateMutation from "../../assets/images/stateMutationDT.png";
import basicOnClick from "../../assets/images/basicOnClickFunction.png";
import BottomNav from "../../components/BottomNav";

const index = () => {
  return (
    <div>
      <h2>State</h2>
      <h3>Introduction</h3>
      <p>
        Remember when I said we'd talk about state in a later chapter? Well this
        is that chapter that we're going to talk about state. In React, state is
        an object where we can store key, pair values. This information can be
        anything, booleans, integers, floats, strings, arrays, other objects,
        and many other data structures. This sounds very similar to props, but
        there is a key difference; with state we can change the value based on
        user input (button clicks, mouse over, keyboard input). But instead of
        just talking about state, let's dive into the code and use it.
      </p>

      <p>In the Counter.js file, perform the following.</p>

      <p>
        Within the declaration of our state object, we'll add a new key, pair
        value of:
      </p>
      <CodeBlock hideBar hideLines text={`state = { currentNumber: 0 };`} />

      <p>
        Within the <strong>{`<p>`}</strong> tag replace the number 0 with{" "}
        <strong>{`{this.state.currentNumber}`}</strong>.
      </p>
      <CodeBlock hideBar hideLines text={`<p>{this.state.currentNumber}</p>`} />

      <CodeBlock text={stateCode1} header="Counter.js" />
      <CodeBreakdown breakdowns={stateBreakdown1} />

      <p>
        After you save, you should notice that nothing has actually changed.
        However, if you look under the hood by opening the React developer tools
        (F12) and search for the Counter component, you'll see that our state
        field currentNumber listed with a value. Compare your screen with the
        image below.
      </p>

      <Screenshot source={stateUsage} />

      <h3>OnClick Functions</h3>

      <p>
        In order to update our state, we'll need to hook up an onClick event to
        our Counter button. Before we try any state manipulation, let's create a
        simple function that will log out "Hello World!" first.
      </p>

      <p>In our Counter.js, write the following code:</p>
      <CodeBlock text={stateCode2} header="Counter.js" />
      <CodeBreakdown breakdowns={stateBreakdown2} />

      <p>
        Once you save, you can navigate to the console (F12 > Console Tab). When
        you click on the button, it will generate a new log. Compare your
        results with the image below:
      </p>

      <Screenshot source={basicOnClick} />

      <h3>State Manipulation</h3>
      <p>
        In this last section, we're going to see how to manipulate state and how
        React will instantly re-render the window (without refreshing!).
      </p>
      <p>In Counter.js, add the following lines:</p>
      <CodeBlock text={stateCode3} header="Counter.js" />
      <CodeBreakdown breakdowns={stateBreakdown3} />
      <p>
        After you save, click the Counter button. You should see the on screen
        the number increment! Wow, you really are a master of React. Good job!
      </p>
      <p>
        Check out the React Dev Tools (F12 > React Tab) to see our state value
        increment in real time. Your screen should look similar to the image
        below:
      </p>
      <Screenshot source={stateMutation} />

      <h3>Conclusion</h3>
      <p>
        Well, that's it, you've completed the React Crash Course. There's still
        much, much more to learn with React but you should now (hopefully)
        understand the fundamental concepts of React. Thanks so much for taking
        the course and good job on completing it!
      </p>

      <BottomNav
        backRoute="stateful-components"
        backTitle="Stateful Components"
        disableForward
      />
    </div>
  );
};

export default index;
