// eslint-disable-next-line no-unused-vars
import React from "react";

const SubjectNav = props => (
  <React.Fragment>
    <h3> {props.subject.title} </h3>
    <ul>
      {props.subject.topics.map(topic => (
        <li>
          <a href={topic.url}> {topic.title} </a>
        </li>
      ))}
    </ul>
  </React.Fragment>
);

export default SubjectNav;
