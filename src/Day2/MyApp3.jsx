import React from 'react';
import MyFunctionComponent, { MyFunctionComponent2 } from 'Day2/MyFunctionComponent';
import MyClassComponent from 'Day2/MyClassComponent';
import propTypes  from 'prop-types';

function MyApp3(props) {
    const myData = {subject:"리액트학습", score:100};
    return (
        <div>
            <MyFunctionComponent subject="react1" score={99}>function1</MyFunctionComponent>
            <MyFunctionComponent subject="react1">function2</MyFunctionComponent>
            <MyFunctionComponent2 subject="react3" score={97}>function2-1</MyFunctionComponent2>
            <MyClassComponent subject="react2" score={89}>function3</MyClassComponent>
            <MyClassComponent subject="react2" score={88}>function4</MyClassComponent>
            <MyFunctionComponent {...myData}>function5</MyFunctionComponent>
            <MyFunctionComponent>function6</MyFunctionComponent>
            <MyClassComponent>function7</MyClassComponent>
        </div>
    );
}
//FunctionComponent의 defaultProps는 경고, JavaScript로 처리하도록 권장
MyFunctionComponent.defaultProps = {subject:"default subject임1", score:50};
MyClassComponent.defaultProps = {subject:"default subject임2", score:55};
MyFunctionComponent.prototypes = {
    subject:propTypes.string,
    score:propTypes.number.isRequired
};
MyClassComponent.prototypes = {
    subject:propTypes.string,
    score:propTypes.number.isRequired
};
export default MyApp3;