import css from './Container.module.css';

const Container = ({ children }) => {
  return <div className={css.mainContainer}>{children}</div>;
};

export default Container;