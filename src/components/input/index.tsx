import React from 'react';
import './styles.css';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscar');
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <SearchIcon fontSize="small" />
      </button>
    </form>
  );
}
