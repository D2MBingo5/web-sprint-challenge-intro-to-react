// Write your Character component here
import React from 'react';
import CharacterHeader from './CharacterHeader';

const Character = props => {
    const { character } = props;
    
    return (
        <div className='character-container'>
            <CharacterHeader characterName={character.name}/>
        </div>
    );
};

export default Character;