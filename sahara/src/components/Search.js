import React from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    return (
        <div>
            <h1>Showing results for: {query}</h1>
        </div>
    );
};

export default Search;
