import { useState } from "react";

import styles from './QueryInput.module.css';

function QueryInput({ onSubmit }) {
    const [query, setQuery] = useState('');

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSubmit(query);
            setQuery('');
        }
    }

    return (
        <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for books..."
        className={styles.input}
        />
    )
}

export default QueryInput;