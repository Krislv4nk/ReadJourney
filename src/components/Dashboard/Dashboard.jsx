

import React, { useState, useEffect } from 'react';
import { Filters } from './Recommended/Filters/Filters';
import { AddBook } from './MyLibrary/AddBook/AddBook';
import { QuoteBlock } from './Recommended/QuoteBlock/QuoteBlock';
import { FunctionalDescription } from './Recommended/FunctionalDescription/FunctionalDescription';
import { RecommendedBooks } from './MyLibrary/RecommendedBooks/RecommendedBooks';
import { AddReading } from './ReadingPage/AddReading/AddReading';
import { Details } from './ReadingPage/DetailsBlock/Details';
import css from './Dashboard.module.css';

const Dashboard = ({ page }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={css.dashboard}>
      {page === 'recommended' && (
        <>
          <Filters />
          <FunctionalDescription link="/library" />
          {isLargeScreen && <QuoteBlock />}
        </>
      )}
      {page === 'library' && (
        <>
          <AddBook />
          <RecommendedBooks link="/recommended" />
        </>
      )}
      {page === "reading" && (
        <>
          <AddReading />
          <Details />
        </>
      )}
    </div>
  );
};

export default Dashboard;
