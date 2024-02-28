import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '../Search/Search';


const Results = ({theme}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWordData = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError('An error occurred while fetching data.');
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    fetchWordData(searchTerm);
  };

  return (
    <Wrapper theme={theme}>
        <Search onSearch={handleSearch} />
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      {data && data.map((entry, index) => (
        <div key={index}>
          <h2>{entry.word}</h2>
          <p>Phonetic: {entry.phonetic}</p>
          {entry.phonetics && entry.phonetics.map((phonetic, i) => (
            <div key={i}>
              <p>Text: {phonetic.text}</p>
              {phonetic.audio && <audio controls src={phonetic.audio}></audio>}
            </div>
          ))}
          <p>Origin: {entry.origin}</p>
          {entry.meanings && entry.meanings.map((meaning, j) => (
            <div key={j}>
              <h3>{meaning.partOfSpeech}</h3>
              {meaning.definitions && meaning.definitions.map((definition, k) => (
                <div key={k}>
                  <p>Definition: {definition.definition}</p>
                  <p>Example: {definition.example}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper =  styled.div`
  border: 1px solid;
  padding-inline: 1rem;
  margin-inline: auto;
  max-width: 70ch;
   background-color: ${(props) => props.theme.background};

   p {
    color: ${(props) => props.theme.text};
   }
   
`
export default Results;
