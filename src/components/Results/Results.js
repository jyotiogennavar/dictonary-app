import React, { useState } from "react";
import styled from "styled-components";
import Search from "../Search/Search";
import { useFont } from "../../context/FontContext";
import { COLORS, WEIGHTS } from "../../constant";

const Results = ({ theme }) => {
  // State variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch word data from the API
  const fetchWordData = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      const jsonData = await response.json();
      if (response.ok) {
        // If response is successful, set data and stop loading
        setData(jsonData);
      } else {
        // If response is not successful, set error message
        const errorMessage = jsonData?.message || "Sorry, we were unable to find your word";
        setError(errorMessage);
      }
    } catch (error) {
      // Handle network errors
      setError("Sorry, we were unable to find your word");
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  // Function to handle search
  const handleSearch = (searchTerm) => {
    fetchWordData(searchTerm);
  };

  // Get selected font using custom hook
  const { selectedFont } = useFont();

  return (
    <Wrapper theme={theme} selectedFont={selectedFont}>
      {/* Search component */}
      <Search onSearch={handleSearch} />

      {/* Loading message */}
      {loading && <p>Finding your Word!</p>}

      {/* Display error message if no data */}
      {!loading && !data && error && (
        <WordNotFound>
          <h4>😞 No Definitions Found</h4>
          <p>{error}</p>
        </WordNotFound>
      )}

      {/* Display data if available */}
      {!loading && data && data.length > 0 && (
        data.map((entry, index) => (
          <div key={index}>
            {/* Display word */}
            <Word>{entry.word}</Word>
            {/* Phonetics handling */}
            {entry.phonetics && entry.phonetics[0] && (
              <Phonetics>
                <PhoneticsText>
                  Phonetic: {entry.phonetics[0].text}
                </PhoneticsText>
                {entry.phonetics[0].audio && (
                  <audio controls src={entry.phonetics[0].audio}></audio>
                )}
              </Phonetics>
            )}
            {/* Meanings */}
            {entry.meanings &&
              entry.meanings.map((meaning, j) => (
                <div key={j}>
                  <PartOfSpeech>{meaning.partOfSpeech}</PartOfSpeech>
                  <WordMeaning>
                    <p>Meaning</p>
                    {/* Definitions */}
                    {meaning.definitions &&
                      meaning.definitions.map((definition, k) => (
                        <div key={k}>
                          <li>{definition.definition}</li>
                          {/* Example */}
                          {definition.example && <p>{definition.example}</p>}
                        </div>
                      ))}
                  </WordMeaning>
                </div>
              ))}
          </div>
        ))
      )}
    </Wrapper>
  );
};

// Styled components
const WordNotFound = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.text};

  h4 {
    font-weight: ${WEIGHTS.bold};
  }

  p {
    color: ${COLORS[400]};
  }
`;

const Wrapper = styled.div`
  padding-inline: 1rem;
  margin-inline: auto;

  font-family: ${({ selectedFont }) => selectedFont};
  color: ${(props) => props.theme.text};

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
  font-size: 1.5rem;
`;

const PartOfSpeech = styled.h3`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
  font-style: italic;
  margin-top: 1rem;
`;

const WordMeaning = styled.ul`
  margin: 1.5rem 0;
  padding-inline-start: 2rem;

  li {
    color: ${(props) => props.theme.text};
    margin-bottom: 0.5rem;
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
