// COMPONENTS //
import QueryInput from "../components/BookSearch/QueryInput";
import BookList from "../components/BookSearch/BookList";
import useFetchBooks from "../hooks/book-search/useFetchBooks";

// UI COMPONENTS //
import Loader from "../components/UI/Loader";

// STYLES //
import styles from "./BookSearch.module.css";

function BookSearchPage() {
    const { bookData, error, isLoading, fetchBookData } = useFetchBooks();

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Book Search</h1>
            
            <div className={styles.input}>
                <QueryInput onSubmit={fetchBookData} />
                <small className={styles.small}>Search by book title, author, publisher, ISBN, etc.</small>
            </div>
            
            {isLoading ? <Loader /> : 
                <BookList 
                bookData={bookData} 
                error={error}
            />}
        </div>
    );
}

export default BookSearchPage;