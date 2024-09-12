import React from 'react';
import "project3/component/App.css";
import { Button } from 'react-bootstrap';

function TodoItem({id, content, isDone, createdDate, onUpdate, onDelete}) {
    const onChangeCheckbox = (e) => {
        onUpdate(id, e.target.name, e.target.value);
    }
    const onClickDelete = () => {
        onDelete(id);
    }
    return (
        <div>
            <div className="TodoItem">
                <div className="checkbox_col">
                    <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" name="isDone"/>
                </div>    
                <div className="title_col">
                    <input
                        name="content"
                        onChange={onChangeCheckbox}
                        value={content}
                    />
                </div>
                <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
                <div className="btn_col">
                    <Button onClick={onClickDelete}>삭제</Button>
                </div>
            </div>    
        </div>

    );
}

export default TodoItem;