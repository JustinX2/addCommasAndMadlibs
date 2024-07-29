import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import Story from './Story';

function Madlib(){
    const [story, setStory]=useState(null);

    const generateStory=(words)=>{
        const {noun, noun2, adjective, color}=words;
        setStory(`The ${adjective} ${color} ${noun} danced around the ${color} ${noun2}.`);
    };

    return (
        <div>
          {story ? (
            <Story story={story} reset={() => setStory(null)} />
          ) : (
            <MadlibForm onSubmit={generateStory} />
          )}
        </div>
      );
}

export default Madlib;
