// Write your Character component here
import React from 'react';
import CharacterHeader from './CharacterHeader';

const Character = props => {
    const { character } = props;
    
    return (
        <div className='character-container'>
            <CharacterHeader characterName={character}/>
            {/* The idea here is to have like a display fold-out, where if you click on a character's name section, it will expand revealing more data */}
        </div>
    );
};

export default Character;