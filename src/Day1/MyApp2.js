import React from 'react';
import ExportTest, { constTest, Func1, Func2, varTest } from 'Day1/ExportTest';
import "Day1/external.css";

//함수형 컴포넌트 : 반드시 컴포넌트 이름은 대문자로 시작해야 한다.
function MyApp2(props) {
    var myname = "리엑트JS";
    const score = 99;
    const student = {name:"이재환", major:"컴공"};
    //이부분의 값은 JSX에서 읽어서 출력 시 display 안됨
    let score2 = null;
    let score3 = undefined;
    let score4 = false;
    const hobbyArr = ["Sports", "Music", "Movie"];
    const hobbyDisplay = hobbyArr.map((item,index)=><li key={index}>{item}</li>);
    console.log(constTest);
    console.log(varTest);
    //console.log(f1());
    //console.log(f2());

    const inlineStyle = {border:"3px dotted blue", color:"orange"};
    return (
        <div style={inlineStyle}>
            <h1 style={{backgroundColor:"green"}}>함수형 Component</h1>
            {/*import 연습*/}
            <p className="myStyle2">constTest:{constTest}</p>
            <p>varTest:{varTest}</p>
            <Func1/>
            <Func2/>
            <ExportTest/>
            <p>이름은 {myname}</p>
            <p>점수는 {score}</p>
            <p>학생 정보 : {student.name}....{student.major}</p>
            <p>점수2는 {score2} {score2==null?"값없음":"score2"}</p>
            <p>점수3는 {score3} {score3?"score3":"값없음"}</p>
            <p>점수4는 {score4} {score4?"score4":"값없음"}</p>
            <div>{hobbyArr}</div>
            <div className="myStyle3">
                <ul>
                    {hobbyArr.map((item,index)=><li key={index}>{item}</li>)}
                </ul>
                <hr/>
                <ul>{hobbyDisplay}</ul>
            </div>
            {/*여기는 주석입니다.*/}
        </div>
    );
}

export default MyApp2;
