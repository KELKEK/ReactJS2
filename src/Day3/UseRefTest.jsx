import React, { useState } from 'react';
import UseRefTest2 from './UseRefTest2';
import { Button } from 'react-bootstrap';

function UseRefTest(props) {
    const[childVisible, setChildVisible] = useState(false);
    return (
        <div>
            <h1>부모</h1>
            <Button onClick={()=>{
                setChildVisible(!childVisible);
            }}>자식보이기/숨기기</Button>
            {childVisible && <UseRefTest2/>}
        </div>
    );
}

export default UseRefTest;