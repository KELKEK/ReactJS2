import React from 'react';
import { useParams } from 'react-router-dom';

function Diary(props) {
    const {id} = useParams();
    return (
        <div>
            <div>{id}번 일기</div>
            <h1>Diary페이지</h1>
        </div>
    );
}

export default Diary;<h1>Diary페이지</h1>