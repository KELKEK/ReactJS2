import { call } from 'login/service/ApiService';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function WebBoardDelete(props) {
    const location = useLocation();
    const navi = useNavigate();
    const bno = location.state.bno;
    console.log(bno);
    useEffect(()=>{
        call(`http://localhost:9999/api/board/delete/${bno}`, "delete", null)
        .then((response)=>{
            console.log(response);
            navi("/webboard/list");
        });
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default WebBoardDelete;