import React from "react";
import BottomNav from "../../components/BottomNav";

const Home = () => {
  return (
    <div>
      <div>
        <p>
          React is a JavaScript library made by Facebook to create powerful
          single page applications. A key feature of React is the way it handles
          updating the application view (browser or native mobile application).
          Older websites have to refresh the window when a resource is requested
          (ex: routing to a new link or submitting a form), but React keeps
          track of what has changed and will re-render the window based on the
          state of the application. This is especially possible through React's
          paradigm of utilizing modular components.
        </p>

        <p>
          During this crash course, we will be going through React fundamentals.
          Before that though, there are a couple of prerequisites necessary to
          install first:
        </p>
        <ul>
          <li>
            <a href="https://nodejs.org/en/">NodeJS</a> ("Recommended For Most
            Users" option)
          </li>
          <li>
            Editor (I use{" "}
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>)
          </li>
          <li>
            <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en">
              React Developer Tools
            </a>{" "}
            (
            <a href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/">
              Firefox version
            </a>
            )
          </li>
          <li>
            <a href="https://git-scm.com/downloads">Git</a>
          </li>
          <li>
            Terminal (I use <a href="https://hyper.is/">Hyper</a>)
          </li>
        </ul>
        <p>
          With all of these downloaded and installed, we can continue to the
          tutorial!
        </p>
      </div>
      <BottomNav disableBack forwardRoute="setup" forwardTitle="Setup" />
    </div>
  );
};

export default Home;
