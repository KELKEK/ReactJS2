import React from 'react';

export const constTest = 100; //상수를 보냄
export var varTest = "문자값"; //변수를 보냄
export function Func1(){return <p>함수1</p>};
export const Func2 = function(){return <p>함수2</p>};

function ExportTest(props) {
    return (
        <div>
            <p>ExportTest함수(default export)</p>
        </div>
    );
}

export default ExportTest;
//각각 export예약어를 사용할 수도 있고, 한꺼번에 작성도 가능하다
//export{ExportTest as default, constTest, varTest, Func1, Func2};