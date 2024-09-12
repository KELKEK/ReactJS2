import React from 'react';
import PropsComponentTest from 'Day2/PropsComponentTest';

function MyApp4(props) {
    const arr = ["HTML", "CSS", "JavaScript", "React"]
    return (
        <div>
            <PropsComponentTest subject={arr}>배열로 들어온 속성값 주고받기</PropsComponentTest>
            <PropsComponentTest>배열로 들어온 속성값 주고받기(보낸 값 없음)</PropsComponentTest>
        </div>
    );
}

export default MyApp4;