import { Link, useParams } from 'react-router-dom';
import BookDetail from '../components/BookSearch/BookDetail';

import SecondaryButton from '../components/UI/Buttons/SecondaryButton';

import styles from "./BookDetail.module.css";

function BookDetailPage() {
    const params = useParams();
    const editionKey = params.bookId;

    return (
        <div className={styles.detail}>
            <div className={styles.header}>
                <h2>Book Details</h2>
                <Link 
                to='..' 
                relative='path'>
                    <SecondaryButton text={'Back'} />
                </Link>
            </div>
            <BookDetail editionKey={editionKey} />
        </div>
    );
}

export default BookDetailPage;