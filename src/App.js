import React from "react";
import "./berky.css";
import apple from "./images/apple.png";
import stars from "./images/stars.png";
import SubjectNav from './components/subjectNav';
import TOPICS from './constants'

function App() {
  return (
    <div id="gridContainer">
      <img id="apple" src={apple} alt="apple" />
      <img id="stars" src={stars} alt="stars" />
      <div id="gridHeader">
        <h1>When in doubt!</h1>
        <div> ( A collection of resources to help you figure it all out )</div>
        <h4 id="red_highlight">
          <a
            id="github_handle"
            href="https://github.com/Berky115/when-in-doubt"
          >
            {" "}
            Visit github for details, examples and more!{" "}
          </a>
        </h4>
      </div>
      <div id="gridBody_JS">
        <h1> Javascript</h1>
        <SubjectNav subject={TOPICS.Lodash}/>
        <SubjectNav subject={TOPICS.Testing}/>
      </div>

      <div id="gridBody_CSS">
        <h1>CSS</h1>
        <SubjectNav subject={TOPICS.CSS_GENERAL}/>
      </div>

      <div id="gridBody_GIT">
        <h1>Git</h1>
        <SubjectNav subject={TOPICS.GIT_GENERAL}/>
      </div>
      <div id="gridBody_PYTHON">
        <h1>Python</h1>
        <SubjectNav subject={TOPICS.PYTHON_GENERAL}/>
      </div>
    </div>
  );
}

export default App;
