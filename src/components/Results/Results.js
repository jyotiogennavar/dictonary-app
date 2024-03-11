import React, { useState } from "react";
import styled from "styled-components";
import Search from "../Search/Search";
import { useFont } from "../../FontContext";

import { COLORS, FONT_FAMILY, WEIGHTS } from "../../constant";

const Results = ({ theme }) => {
  const [data, setData] = useState(null);
  console.log(data)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWordData = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError("Sorry, we were unable to find your word ");
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    fetchWordData(searchTerm);
  };

  const { selectedFont } = useFont(); // Use useFont hook to get selectedFont


  return (
    <Wrapper theme={theme} selectedFont={selectedFont}>
      <Search onSearch={handleSearch} />

      {loading && <p>Finding your Word!</p>}
      {error && <p>{error}</p>}

      {data &&
        data.map((entry, index) => (
          <div key={index}>
            <Word>{entry.word}</Word>
            {/* Phonetics Handling */}
            {entry.phonetics && entry.phonetics[0] && (
              <Phonetics>
                <PhoneticsText>
                  Phonetic: {entry.phonetics[0].text}
                </PhoneticsText>
                {entry.phonetics[0].audio && (
                  <audio controls src={entry.phonetics[0].audio}></audio>
                  // <AudioButton src={entry.phonetics[0].audio}></AudioButton>
                )}
              </Phonetics>
            )}

            {entry.meanings &&
              entry.meanings.map((meaning, j) => (
                <div key={j}>
                  <PartOfSpeech>{meaning.partOfSpeech}</PartOfSpeech>
                
                  <WordMeaning>
                  <p>Meaning</p>
                          {meaning.definitions &&
                    meaning.definitions.map((definition, k) => (
                      <div key={k}>
                        <li>{definition.definition}</li>
                        {/* Check if definition.example exists before rendering */}
                        {definition.example && <p>{definition.example}</p>}
                      </div>
                    ))}
                  </WordMeaning>
            
                </div>
              ))}
          </div>
        ))}
    </Wrapper>
  );
};

const AudioButton = styled.audio`
 position: relative;
        width: 100px; /* Adjust the size of the circle */
        height: 100px; /* Adjust the size of the circle */
        border-radius: 50%; /* Make it circular */
        overflow: hidden;
        background-color: #f0f0f0; /* Background color of the circle */
        cursor: pointer;
`;

const Wrapper = styled.div`
  padding-inline: 1rem;
  margin-inline: auto;
  max-width: 50%;

  font-family: ${({ selectedFont }) => selectedFont};


  color: ${(props) => props.theme.text};

  @media (max-width: 768px) { /* Adjust breakpoint according to your design */
    max-width: 100%; /* Change max-width for viewport smaller than 768px */
  }

  & > * {
    margin-block: 0;
  }

  & > * + * {
    margin-block-start: 1rem;
  }
`;
const Word = styled.h2`
  font-weight: ${WEIGHTS.bold};
  font-size: 64px;
`;

const Phonetics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PhoneticsText = styled.p`
  color: ${COLORS.purple};
  font-size: 24px;
`;

const PartOfSpeech = styled.h3`
  font-size: 24px;
  font-weight: ${WEIGHTS.bold};
  font-style: italic;
`;

const WordMeaning = styled.ul`
  margin: 1.5rem 0;
  padding-inline-start: 2rem;

  li {
    color: ${COLORS[600]};
    margin-bottom: .5rem;
  }

  li::marker {
    color: ${COLORS.purple};
  }

  p {
    color: ${COLORS[400]};
    margin-bottom: 1rem;
  }
`;

export default Results;
