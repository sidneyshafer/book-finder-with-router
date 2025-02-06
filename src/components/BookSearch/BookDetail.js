import useFetchBookDetails from "../../hooks/book-search/useFetchBookDetails";

import Loader from "../UI/Loader";

import styles from "./BookDetail.module.css";

function BookDetail({ editionKey }) {

    const { bookDetails, bookDetailsError, isLoading } = useFetchBookDetails(editionKey);

    //Book Details 
    const publishers = bookDetails?.publishers;
    const pageCount = bookDetails?.number_of_pages;
    const publishPlaces = bookDetails?.publish_places;
    const title = bookDetails?.title;
    const publishDate = bookDetails?.publish_date;
    const coverId = bookDetails?.covers[0];
    const bookFormat = bookDetails?.physical_format;

   const isbn10 = bookDetails?.isbn_10;
   const isbn13 = bookDetails?.isbn_13;

   let src;
   if (isbn10 || isbn13) {
      src = `https://covers.openlibrary.org/b/isbn/${isbn10 ? isbn10 : isbn13}-L.jpg`;
   } else {
      src = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
   }
    
    return (
      <>
      {isLoading ? <Loader /> :
        <div className={styles.container}>
          
            <div className={styles.book}>
              <div>
                  <img src={src ? src : '#'} />
              </div>
          </div>
            
            <div className={styles.info}>
                <h3>{title ? title : null}</h3>
                
                {publishers && 
                <>
                    <small>Publisher</small>
                    <p>{publishers.map(publisher => publisher).join(', ')}</p>
                </>
                }

                {publishDate && 
                <>
                    <small>Publish Date</small>
                    <p>{publishDate}</p>
                </>
                }

                {publishPlaces && 
                     <>
                        <small>Places Published</small>
                        <p>{publishPlaces.map(place => place).join(', ')}</p>
                     </>
                }

                {pageCount && 
                  <>
                     <small>Page Count</small>
                     <p>{pageCount}</p>
                  </>
                }

                {bookFormat && 
                  <>
                     <small>Book Format</small>
                     <p>{bookFormat}</p>
                  </>
                }

                {isbn10 && 
                  <>
                     <small>ISBN 10</small>
                     <p>{isbn10}</p>
                  </>
                }

                {isbn13 && 
                  <>
                     <small>ISBN 13</small>
                     <p>{isbn13}</p>
                  </>
                }

            </div>
        </div>
      }
      </>
    );
}

export default BookDetail;