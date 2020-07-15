import React, { useState, useEffect } from 'react';
import QuotesGrid from './QuotesGrid';
import Search from '../ui/Search';
import axios from 'axios';

const QuotesMain = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);

      const result = query
        ? await axios(
            `https://www.breakingbadapi.com/api/quote?author=${query}`
          )
        : await axios(`https://www.breakingbadapi.com/api/quotes`);

      setQuotes(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div>
      <Search getQuery={(q) => setQuery(q)} />
      <QuotesGrid isLoading={isLoading} quotes={quotes} />
    </div>
  );
};

export default QuotesMain;
