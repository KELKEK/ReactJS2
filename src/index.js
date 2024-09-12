import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp1 from 'Day1/MyApp1';
import MyApp2 from 'Day1/MyApp2';
import EnvTest from 'Day1/EnvTest';
import MyApp3 from 'Day2/MyApp3';
import MyApp4 from 'Day2/MyApp4';
import MyApp5 from 'Day2/MyApp5';
import Day3app from 'Day3/Day3app';
import Day3App2 from 'Day3/Day3App2';
import ProjApp from 'project3/ProjApp';
import MemoTest from 'Day4/MemoTest';
import SmartHome from 'Day4/SmartHome';
import KeyList from 'Day4/KeyList';
import ReducerTest2 from 'Day4/ReducerTest2';
import App from 'project4/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WebBoardHome from 'Day5/WebBoardHome';
import Home from 'login/Home';
import Login from 'login/Login';
import SignUp from 'login/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <BrowserRouter>
        <Routes>
        <Route path="/webboard/*" element={<WebBoardHome/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        </Routes>

    </BrowserRouter>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
