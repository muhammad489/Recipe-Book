import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for recipes..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
