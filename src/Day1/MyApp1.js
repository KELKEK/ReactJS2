import React from 'react';
import Content from 'Day1/Content';
import Section from 'Day1/Section';
import Header from 'Day1/Header';

//Component : 재사용 가능, 반드시 대문자로 시작해야함, 외부에서 사용하려면 export적어줘야 함
function MyApp1(props) {
    //아래는 JSX(JavaScript XML) : 반드시 root 1개, tag는 반드시 닫는다.
    return (
        <div>
            <h1>Function Component1</h1>
            <Header/>
            <Content/>
            <Content/>
            <Section/>
            <hr/>
        </div>
    );
}

export default MyApp1;