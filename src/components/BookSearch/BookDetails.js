import { Link } from "react-router-dom";

import useFetchBookDetails from "../../hooks/book-search/useFetchBookDetails";
import Loader from "../UI/Loader";

import styles from "./BookDetails.module.css";

function BookDetails({ book }) {

   const bookTitle = book?.title;
   const editionKey = book?.cover_edition_key;
   const coverId = book?.cover_i;

   const { bookDetails, bookDetailsError, isLoading } = useFetchBookDetails(editionKey);

   if (bookDetailsError) {
      return (
         <div className={styles.container}>
            <p>Error: {bookDetailsError}</p>
         </div>
      );
   }
   if (isLoading) {
      return (
         <div className={styles.container}>
            <Loader />
         </div>
      );
   }

   const isbn10 = bookDetails?.isbn_10;
   const isbn13 = bookDetails?.isbn_13;

   let src;
   if (isbn10 || isbn13) {
      src = `https://covers.openlibrary.org/b/isbn/${isbn10 ? isbn10 : isbn13}-L.jpg`;
   } else {
      src = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
   }

   return (
      <Link to={`/book-search/${editionKey}`}>
         <div className={styles.container}>
            <div className={styles.book}
            style={{ 
               backgroundImage: src ? `url(${src})` : "none",
            }}
            >
               <div className={styles.info}>
                  <h4>{bookTitle}</h4>
                  <p>View Details</p>
               </div>
            </div>
         </div>
      </Link>
   );
}

export default BookDetails;