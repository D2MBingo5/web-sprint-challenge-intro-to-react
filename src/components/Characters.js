import React from 'react'
import Character from './Character'

const Characters = (props) => {
    const { characters } = props;

    return(
        <div>
            {characters.map( character => <Character key={character} character={character.name}/>)}
        </div>
    )
}

export default Characters;