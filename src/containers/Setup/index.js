import React from "react";
import CodeBlock from "../../components/CodeBlock";
import InfoBlock from "../../components/InfoBlock";
import { repo } from "../../data/CodeSnippets";
import Screenshot from "../../components/Screenshot";
import npmStart from "../../assets/images/1- Yarn Start.png";
import BottomNav from "../../components/BottomNav";

const Setup = () => {
  return (
    <div>
      <h2>Setup</h2>
      <p>Clone the Crash Course Repo</p>
      <CodeBlock text={repo} hideLines hideBar />

      <p>Open up your project with your text editor</p>
      <p>
        Open up your terminal and after navigating to the project directory, run
        the command down below. This will download all the dependencies needed
        to run the project and place them in the ./node_modules folder.
      </p>
      <CodeBlock text="npm install" hideLines hideBar />
      <InfoBlock
        header="NPM"
        content="NPM stands for Node Package Manager and is included when you install NodeJS"
      />
      <p>
        After the npm install has finished, run the following command in your
        terminal. This will start the development server by invoking React's
        start script.
      </p>
      <CodeBlock text="npm run start" hideLines hideBar />
      <InfoBlock
        header="React Development Server"
        content={`React's start script is located in the package.json file. The development server by default runs on "localhost:3000".`}
      />
      <p>
        Congratulations, you've started your first react app! Your screen should
        look like the image down below.
      </p>
      <Screenshot source={npmStart} />
      <BottomNav
        backRoute=""
        backTitle="Home"
        forwardRoute="stateless-components"
        forwardTitle="Stateless Components"
      />
    </div>
  );
};

export default Setup;
