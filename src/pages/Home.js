import { Link, useNavigate } from 'react-router-dom';

import PrimaryButton from '../components/UI/Buttons/PrimaryButton';

import styles from "./Home.module.css";

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/book-search');
    }

    return (
        <>
            <h1 className={styles.header}>Book Finder</h1>
            <div className={styles.content}>
                <p>An elegant UI given to the Open Library API!</p>
                <p>Search for your favorite books, authors, subjects, and more through the vast data provided by the Open Library community. </p>
                <PrimaryButton  
                onClick={navigateHandler} 
                text={'Start Searching'}
                />
            </div>
        </>
    );
}

export default HomePage;