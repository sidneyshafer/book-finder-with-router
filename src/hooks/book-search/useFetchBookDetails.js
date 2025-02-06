import { useState, useEffect } from "react";

function useFetchBookDetails(editionKey) {
    const [bookDetails, setBookDetails] = useState(null);
    const [bookDetailsError, setBookDetailsError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!editionKey) return;

        async function fetchDetails() {
            setIsLoading(true);
            try {
                const response = await fetch(`https://openlibrary.org/books/${editionKey}.json`);
                if (!response.ok) {
                    throw new Error("Failed to fetch book details.");
                }
                const data = await response.json();
                setBookDetails(data);
            } catch (error) {
                setBookDetailsError(error.message);
            }
            setIsLoading(false);
        }

        fetchDetails();
    }, [editionKey]);

    return { bookDetails, bookDetailsError, isLoading };
}

export default useFetchBookDetails;