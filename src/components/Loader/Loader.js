import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';

function Loader() {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(
          'https://lottie.host/9b54aed5-e1fc-4568-abfe-9dbc1f092b1d/EguPkKFIIb.json'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch animation data');
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        setError(error.message || 'Failed to load animation data');
      }
    };

    fetchAnimationData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Wrapper style={{ width: 100, height: 100 }}>
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
      />
    </Wrapper>
  );
}


const Wrapper = styled.div`
  margin: auto;
  margin-top: 10rem;
`
export default Loader;
