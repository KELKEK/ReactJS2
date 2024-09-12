import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

function TodoEditor({onCreate}) {
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = () =>{
        if(!content){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }
    //*****************복습 */
    var score = 100; //재 rendering시 초기화된다.
    const scoreRef = useRef(100); //재 rendering 시 초기화되지 않고 본래값 유지
    const addHandler = () =>{
        score++;
        scoreRef.current++;
        console.log(score, scoreRef);
    }
    useEffect(()=>{
        console.log("load 시 1회");
    }, []);
    useEffect(()=>{
        console.log("rendering 될 때 마다 수행");
    })
    useEffect(()=>{
        console.log("content변경 시마다");
    }, [content])
    //******************************복습 */
    return (
        <div>
            <h4>새로운 Todo 작성하기✏️</h4>
            <Button onClick={addHandler}>추가</Button>
            <div className="editor_wrapper">
                <input ref={inputRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder="새로운 Todo"/>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;