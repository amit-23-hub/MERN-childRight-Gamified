import React, { useState } from 'react';
import './dict.css';

const Dictionary = () => {
  const [inputValue, setInputValue] = useState('');
  const [meaning, setMeaning] = useState('');
  const [phonetics, setPhonetics] = useState('');

  const api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const handleSearch = async () => {
    try {
      const response = await fetch(api_url + inputValue);
      const data = await response.json();
      setMeaning(data[0].meanings[0].definitions[0].definition);
      setPhonetics(data[0].phonetics[0].text); // Adjusted index for phonetics
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="dictcontainer">
      <div className="dictBox">
        <h1>📚 DICTIONARY 📖</h1>
        <input
          type="text"
          placeholder="Enter word"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="srchbtn" onClick={handleSearch}>Search</button>
        <p id="phont">{phonetics}</p>
        <p id="meaning">{meaning}</p>
      </div>
    </div>
  );
};

export default Dictionary;
