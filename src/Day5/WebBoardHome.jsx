import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import WebBoardList from 'Day5/WebBoardList';
import WebBoardDetail from 'Day5/WebBoardDetail';
import WebBoardInsert from './WebBoardInsert';
import WebBoardUpdate from './WebBoardUpdate';
import WebBoardDelete from './WebBoardDelete';
import { Button } from 'react-bootstrap';
function WebboardHome(props) {
    const navi = useNavigate();
    const clickHandler1 = () => {
        navi("/");
    };
    const clickHandler2 = () => {
        navi("/webboard/list");
    };
    const clickHandler3 = () => {
        navi(-1);
    };
    const [board, setBoard] = useState({bno:100, title: "react배우기"});
    return (
        <div>
            <h1>WebBoard CRUD Test</h1>
            <Link to="list">목록보기</Link>{'   '}
            <Link to="detail/99">상세보기</Link>{'   '}
            <Link to="insert">입력</Link>{'   '}
            <Link to="update" state={{"board": board}}>수정</Link>{'   '}
            <Link to="delete" state={{"bno": 99}}>삭제</Link>{'   '}
            <Button onClick={clickHandler1}>처음 화면으로 이동</Button>{'   '}
            <Button onClick={clickHandler2}>보드 목록으로 이동</Button>{'   '}
            <Button onClick={clickHandler3}>이전 페이지로 이동</Button>
            <Routes>
                <Route path="list" element={<WebBoardList/>}/>
                <Route path="detail/:bno" element={<WebBoardDetail/>}/>
                <Route path="insert" element={<WebBoardInsert/>}/>
                <Route path="update" state={{"board": board}} element={<WebBoardUpdate/>}/>
                <Route path="delete" state={{"bno": board.bno}} element={<WebBoardDelete/>}/>
            </Routes>
        </div>
    );
}
export default WebboardHome;