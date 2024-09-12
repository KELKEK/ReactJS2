import React from 'react';

function Light({ room, on })  {
    console.log(room, on);
    return (
        <div>
            <div>{on ? "💡" : "⬛"}</div>
        </div>
    );
}

export default React.memo(Light);
//React DOM업데이트