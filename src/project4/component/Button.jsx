import React from 'react';
import "project4/App.css";

function Button({text, type, onClick}) {
    const btnType = ["positive", "negative"].includes(type)?type:"default";
    return (
            <button className={["Button", `Button_${btnType}`].join(" ")} onClick={onClick}>{text}</button>
    );
}

Button.defaultProps = {
    type: "default",
}
export default Button;