// Added file as custom component to display character names before character data
import React from 'react';

console.log('hello world')

const CharacterHeader = (props) => {
 const { characterName } = props;

 return (
    <div className='character-name'>
        <h2>{characterName}</h2>
    </div>
 );
};

export default CharacterHeader;