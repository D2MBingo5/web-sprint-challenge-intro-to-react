// Added file as custom component to display character names before character data
import React from 'react';

console.log('hello world')

const CharacterHeader = (props) => {
 const { characterName } = props;

 return (
    <h2 className='character-name'>
        {characterName}
    </h2>
 );
};

export default CharacterHeader;