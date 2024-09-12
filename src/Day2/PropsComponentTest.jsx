//부모가 자식에게 Property를 보내면 받기
import React from 'react';

function PropsComponentTest({ subject = ["A", "B", "C"], children }) {

    return (
        <div>
            <h1>배열로 들어온 속성값 받기</h1>
            <h1>{children}</h1>
            <ul>
                {subject.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default PropsComponentTest;<h1>배열로 들어온 속성값 받기</h1>