

import Dashboard from "../../components/Dashboard/Dashboard";
import { MyLibrary } from '../../components/MyLibrary/MyLibrary';
import css from './LibraryPage.module.css';

const LibraryPage = () => {
  return (
    <div className={css.libraryWrapper}>
       <Dashboard page="library" />
       <MyLibrary/>
    </div>
  );
};

export default LibraryPage;