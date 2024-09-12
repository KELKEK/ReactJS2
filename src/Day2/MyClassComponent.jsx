import React, { Component } from "react";
import "Day1/external.css";
import Button from "react-bootstrap/Button";

class MyClassComponent extends Component {
  render() {
    const {subject, score, children} = this.props; //{subject:"aaa", score:{99}}
    const inlineStyle = { border: "1px solid green", color: "red" };
    return (
      <div style={inlineStyle}>
        <h1 style={{ backgroundColor: "lightpink" }}>ClassComponent</h1>
        <h2 className="myStyle2">외부의 CSS사용하기</h2>
        <p>속성받기 subject : {this.props.subject}</p>
        <p>속성받기 subject : {subject}</p>
        <p>속성받기 score : {this.props.score}</p>
        <p>속성받기 score : {score}</p>
        <p>tag 사이의 내용. children : {this.props.children}</p>
        <p>tag 사이의 내용. children : {children}</p>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
    );
  }
}

export default MyClassComponent;
<h1>ClassComponent</h1>;
