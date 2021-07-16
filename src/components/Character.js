// Write your Character component here
import React from 'react';
import CharacterHeader from './CharacterHeader';
import styled from 'styled-components';

const Character = props => {
    const { character } = props;
    
    //Styling
    const CharacterContainerDiv = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

    return (
        <CharacterContainerDiv>
            <CharacterHeader characterName={character}/>
            {/* The idea here is to have like a display fold-out, where if you click on a character's name section, it will expand revealing more data */}
        </CharacterContainerDiv>
    );
};

export default Character;