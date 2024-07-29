import React from 'react';

function Story({story, reset}){
    return(
        <div className="story">
            <p>{story}</p>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Story;