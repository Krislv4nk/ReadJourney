

import {Filters} from './Recommended/Filters/Filters';
import {AddBook} from './MyLibrary/AddBook/AddBook';
import { QuoteBlock } from './Recommended/QuoteBlock/QuoteBlock';
import {FunctionalDescription} from './Recommended/FunctionalDescription/FunctionalDescription';
import { RecommendedBooks } from './MyLibrary/RecommendedBooks/RecommendedBooks';
import css from './Dashboard.module.css';

const Dashboard = ({ page }) => {
  return (
    <div className={css.dashboard}>
      {page === 'recommended' && (
        <>
          <Filters />
          <FunctionalDescription link="/library" />
          <QuoteBlock />
        </>
      )}
      {page === 'library' && (
        <>
          <AddBook />
          <RecommendedBooks link="/recommended" />
        </>
      )}
    </div>
  );
};

export default Dashboard;