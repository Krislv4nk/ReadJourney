

import  { useState } from 'react';

export const AddBook = () => {
  const [form, setForm] = useState({ title: '', author: '', genre: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Відправка запиту на backend
      const response = await fetch('/api/books', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
      }
      alert('Книгу успішно додано!');
    } catch (err) {
      setError('Сталася помилка, спробуйте ще раз.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Author" required />
      <input name="genre" value={form.genre} onChange={handleChange} placeholder="Genre" required />
      <button type="submit">Add book</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

 
