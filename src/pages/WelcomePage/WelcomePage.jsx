import Container from "../../components/SharedLayout/Container/Container";
import { AuthBackground } from "../../components/Auth/AuthBackground/AuthBackground";
import { QuoteBlock } from '../../components/Dashboard/Recommended/QuoteBlock/QuoteBlock';
import { useNavigate } from 'react-router-dom';
import css from './WelcomePage.module.css';


const WelcomePage = () => {
    const navigate = useNavigate();
    const TryClick =() =>{
        navigate('/signup');
    }
    return (
        <Container>
      <AuthBackground showTitle={false}/>
      <div className={css.welcomeWrapper}>
      <h1 className={css.welcomeTitle}>Welcome to ReadJourney!<br/> <span className={css.welcomeTitleSpan}>Dive into the world of books!</span></h1>
      <button type="button" onClick={TryClick} className={css.welcomeBtn}>
      Start Your Journey
      </button>
      <QuoteBlock />
      </div>
      </Container>
    )
}

export default WelcomePage;