import React from 'react';
import { Button } from 'react-bootstrap';

function UseRefTest2(props) {
    var score = 100;
    const clickhandler = () => {
        score = score + 1;
        console.log(score);
    };
    return (
        <div>
            <h1>자식</h1>
            <Button onClick={clickhandler}>점수변경</Button>
        </div>
    );
}

export default UseRefTest2;