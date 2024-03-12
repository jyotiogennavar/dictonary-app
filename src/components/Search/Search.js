import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constant";
import { TextSearch } from "lucide-react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
      setError(""); // Clear any previous errors
    } else {
      setError("Whoops, can’t be empty…");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
     <Wrapper>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a word"
      />
      
      <button onClick={handleSearch}>
        <TextSearch color={COLORS.purple} size={22} strokeWidth={3} />
      </button>
      
    </Wrapper>
    {error && <ErrorText>{error}</ErrorText>}
    </>
   
  );
};

const Wrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;

  input {
    border: none;
    background-color: ${(props) => props.theme.searchBackground};
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;

    font-size: 20px;
    font-weight: ${WEIGHTS.bold};

    &:focus-visible {
      border: 2px solid ${COLORS.purple};
    }
  }

  button {
    margin: 1rem;
    border: none;
    border-radius: 50%;
    background-color: ${(props) => props.theme.searchBackground};
    padding: 1rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ErrorText = styled.p`
  color: ${COLORS.red};
  
  font-size: 1rem;
`;

export default Search;
