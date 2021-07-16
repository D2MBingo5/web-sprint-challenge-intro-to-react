// Added file as custom component to display character names before character data
import React from 'react';

import styled from 'styled-components'

console.log('hello world')

const CharacterHeader = (props) => {
 const { characterName } = props;


 //Styling
 const H2CharacterName = styled.h2`
  color: black;
  background-color: white;
  width: 90%;
  height: 100%;
  border-radius: 8px;

  // hover color change to denote this can be clicked, if I add such functionality
  transition: all 0.5s ease-in-out;
  &:hover {
      transition: all 0.5s ease-in-out;
      color: white;
      background-color: crimson;
  }
 `

 return (
    <H2CharacterName>
        {characterName}
    </H2CharacterName>
 );
};

export default CharacterHeader;