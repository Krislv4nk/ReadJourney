

import Dashboard from "../../components/Dashboard/Dashboard";
import { RecommendedBooks } from "../../components/RecommendedBooks/RecommendedBooks";
import css from './RecommendedPage.module.css';



const RecommendedPage = () => {
  return (
   
      <div>
      <div className={css.pageWrapper}>
        <Dashboard page="recommended" />
        <RecommendedBooks />
      </div>
      </div>
    
  );
};

export default RecommendedPage;
