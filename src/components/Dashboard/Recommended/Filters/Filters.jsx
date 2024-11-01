

import  { useState } from 'react';

export const Filters = () => {
  const [form, setForm] = useState({ keyword: '', genre: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="keyword"
        value={form.keyword}
        onChange={handleChange}
        placeholder="Keyword"
      />
      <input
        name="genre"
        value={form.genre}
        onChange={handleChange}
        placeholder="Genre"
      />
      <button type="submit">To apply</button>
    </form>
  );
};


