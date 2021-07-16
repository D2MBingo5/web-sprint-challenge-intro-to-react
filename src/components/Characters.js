import React from 'react'
import Character from './Character'

const Characters = (props) => {
    const { characters } = props;

    return(
        <div>
            {characters ? characters.map( character => <Character key={character.name} character={character.name}/>) : null}
        </div>
    )
}

export default Characters;