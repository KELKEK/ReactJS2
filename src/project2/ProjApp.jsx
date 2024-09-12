import React, {useRef, useState } from 'react';
import "project2/component/App.css";
import Header from 'project2/component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createdDate: new Date().getTime(),
    },        
    {
        id: 1,
        isDone: false,
        content: "빨래 널기",
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        createdDate: new Date().getTime(),
    },
]

function ProjApp(props) {
    const idRef = useRef(3);
    const [todo, setTodo] = useState([]);
    const onCreate = (content) => {
        const newItem = {
            id: idRef.current,
            isDone: false,
            content,
            createdDate: new Date().getTime(),
        };
        setTodo([newItem, ...todo]);
        idRef.current += 1;
    };
    const onUpdate = (targetId, column, value) => {
        setTodo(
            todo.map(
                (it) => {
                    if(it.id === targetId && column === "isDone"){
                        return{
                            ...it,
                            isDone: !it.isDone,
                        };
                    }
                    
                    if(it.id === targetId && column === "content"){
                        return{
                            ...it,
                            content: value,
                        };
                    } else{
                        return it;
                        //삼항연산자를 이용하면 더 간단히 구현 가능
                    }
                }
            )
        );
    };

    const onDelete = (targetId) => {
        setTodo(todo.filter((it) => it.id !== targetId));
    };

    return (
        <div className="App">
            <div>리액트시작</div>
            <Header/>
            <TodoEditor onCreate={onCreate}/>
            <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
        </div>
    );
}

export default ProjApp;