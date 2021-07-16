import React from 'react'
import Character from './Character'

import styled from 'styled-components'

const Characters = (props) => {
    // maps the data from the api pull onto the DOM, each object from the data creates its own div
    const { characters } = props;

    // Styling
    const CharsDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

    return(
        <CharsDiv>
            {characters ? characters.map( character => <Character key={character.name} character={character.name}/>) : null}
        </CharsDiv>
    )
}

// It might be overkill to pass data through 3 separate .js files before being imported into App.js, but it is what I know for now.
// The kind of annoying thing about it is having to import styled-components on each of these. No harm, no foul.

export default Characters;