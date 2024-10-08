import { emotionList, getFormattedDate } from 'project4/Util';
import React, { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import EmotionItem from './EmotionItem';

function Editor({initData, onSubmit}) {
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: "",
    });
    const handleChangeDate = (e) => {
        //날짜변경 시 실행할 이벤트핸들러
        setState({
            ...state,
            date: e.target.value,
        });
    };
    const handleChangeContent = (e) => {
        //일기 입력 세션 구현
        setState({
            ...state,
            content: e.target.value,
        });
    };
    const handleSubmit = () =>{
        onSubmit(state);
    };
    const navigate = useNavigate();
    const handleOnGoBack = () =>{
        navigate(-1);
    }
    const handleChangeEmotion = (emotionId) =>{
        setState({
            ...state,
            emotionId,
        });
    } 
    return (
        <div className="Editor">
            <div className="editor_section">
                {/*날짜*/}
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input type="date" value={state.date} onChange={handleChangeDate}/>
                </div>
            </div>
            <div className="editor_section">
                {/*감정*/}
                <h4>오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {emotionList.map((it) => (
                        <EmotionItem
                        key={it.id}
                        {...it}
                        onClick={handleChangeEmotion}
                        isSelected={state.emotionId === it.id}
                        />
                    ))}
                </div>
            </div>
            <div className="editor_section">
                {/*일기*/}
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                <textarea
                    placeholder="오늘은 어땠나요?"
                    value={state.content}
                    onChange={handleChangeContent}
                />
                </div>
            </div>
            <div className="editor_section bottom_section">
                {/*작성 완료, 취소*/}
                <Button text={"취소하기"} onClick={handleOnGoBack}/>
                <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit}/>
            </div>
        </div>
    );
}

export default Editor;