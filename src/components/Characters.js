import React from 'react'
import Character from './Character'

const Characters = (props) => {
    // maps the data from the api pull onto the DOM, each object from the data creates its own div
    const { characters } = props;

    return(
        <div className='chars'>
            {characters ? characters.map( character => <Character key={character.name} character={character.name}/>) : null}
        </div>
    )
}

// It might be overkill to pass data through 3 separate .js files before being imported into App.js, but it is what I know for now.
// The kind of annoying thing about it is having to import styled-components on each of these. No harm, no foul.

export default Characters;