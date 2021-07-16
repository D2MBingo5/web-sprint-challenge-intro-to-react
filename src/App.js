import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios'

import Characters from './components/Characters'

import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState('')
  
  // If time permits, I would like to be able to click on a name to expose more information about a character. Check components/Character.js for an expansion of this idea.
  // const [selectedCharacter, setSelectedCharacter] = useState(null)

  // const markActiveCharacter = id => {
  //   // This sets selectedCharacter to id, or null if the id is already selectedCharacter
  //   id === selectedCharacter ? setSelectedCharacter(null) : setSelectedCharacter(id)
  // }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    // api call
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        // console.log(res.data)
        setCharacters(res.data)
      })
      .catch(err => console.log(err)) // Handling promise rejection
      .finally(console.log('api call done')) // For good measure
  }, [])

  // console.log(characters, 'test from App.js') // A test performed to see where exactly my api pull is logging from

  //Styling
  const DivApp = styled.div`
    text-align: center;
  `
  const H1Header = styled.h1`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
  `
  // styled-components rocks, very fun to use

  return (
    <DivApp>
      <H1Header>Characters</H1Header>
      <Characters characters={characters}/>
    </DivApp>
  );
}

export default App;
