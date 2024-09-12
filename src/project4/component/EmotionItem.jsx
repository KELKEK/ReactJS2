import React from 'react';
import "project4/App.css"

function EmotionItem({id, img, name, onClick, isSelected}) {
    const handleOnClick = () =>{
        onClick(id);
    }
    return (
        <div>
            <div className="EmotionItem" onClick={handleOnClick}>
                <img alt={`emotion${id}`} src={img}/>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default EmotionItem;