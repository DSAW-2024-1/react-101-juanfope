import React, { useState, useEffect } from 'react';

function QuoteContainer() {
  const [quotes, setQuotes] = useState([]);
  const [characterFilter, setCharacterFilter] = useState('');

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async (characterName = '') => {
    let apiUrl = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=8';
    if (characterName !== '') {
      apiUrl += `&character=${encodeURIComponent(characterName)}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  const handleFilterChange = () => {
    const characterName = characterFilter.trim();
    fetchQuotes(characterName);
  };

  return (
    <div>
      {quotes.map((quoteData, index) => (
        <div key={index} className="quote">
          <img src={quoteData.image} alt={quoteData.character} />
          <p>"{quoteData.quote}" - {quoteData.character}</p>
        </div>
      ))}
      {}
    </div>
  );
}

export default QuoteContainer;
