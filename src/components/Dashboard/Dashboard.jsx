

import React, { useState, useEffect } from 'react';
import { Filters } from './Recommended/Filters/Filters';
import { AddBook } from './MyLibrary/AddBook/AddBook';
import { QuoteBlock } from './Recommended/QuoteBlock/QuoteBlock';
import { FunctionalDescription } from './Recommended/FunctionalDescription/FunctionalDescription';
import { RecommendedLibraryBooks } from './MyLibrary/RecommendedLibraryBooks/RecommendedLibraryBooks';
import { AddReading } from './Reading/AddReading/AddReading';
import { Details } from './Reading/DetailsBlock/Details';
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
          <RecommendedLibraryBooks link="/recommended" />
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
