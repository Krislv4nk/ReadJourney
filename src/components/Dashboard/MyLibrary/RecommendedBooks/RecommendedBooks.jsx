


import { Link } from 'react-router-dom';

export const RecommendedBooks = ({ link }) => (
  <div>
    <h2>Recommended Books</h2>
    {/*  */}
    <Link to={link}>Go to Recommended Page</Link>
  </div>
);

