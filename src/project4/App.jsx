import React from 'react';
import "./App.css";
import emotion1 from "./img/emotion1.png"
import emotion2 from "./img/emotion2.png"
import emotion3 from "./img/emotion3.png"
import emotion4 from "./img/emotion4.png"
import emotion5 from "./img/emotion5.png"
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

function App(props) {
    //주소에 따른 element로 교체된다. 예시로는 BrowserRouter와 routes 태그가 같은 index.js에 묶여있지만 이 코드에서는 따로 두었다.
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="/edit" element={<Edit/>}/>
            </Routes>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/new"}>New</Link>
                <Link to={"/diary"}>Diary</Link>
                <Link to={"/edit"}>Edit</Link>
            </div>
        </div>
    );
}

export default App;