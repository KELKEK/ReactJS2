import React from 'react';

function MyFunctionComponent(props) {
    const inlineStyle = {border:"1px solid green", color:"blue"};
    const {subject, score, children} = props; //{subject:"aaa", score:{99}}
    return (
        <div style={inlineStyle}>
            <h1 style={{color:"red"}}>FunctionComponent</h1>
            <p>속성받기 subject : {props.subject}</p>
            <p>속성받기 subject2 : {subject}</p>
            <p>속성받기 score : {props.score}</p>
            <p>속성받기 score2 : {score}</p>
            <p>tag 사이의 내용. children : {props.children}</p>
            <p>tag 사이의 내용. children : {children}</p>
        </div>
    );
}

export function MyFunctionComponent2({subject, score, children}) {
    const inlineStyle = {border:"1px solid green", color:"cyan"};
    return (
        <div style={inlineStyle}>
            <h1 style={{color:"red"}}>FunctionComponent</h1>
            <p>속성받기 subject2 : {subject}</p>
            <p>속성받기 score2 : {score}</p>
            <p>tag 사이의 내용. children : {children}</p>
        </div>
    );
}

export default MyFunctionComponent;