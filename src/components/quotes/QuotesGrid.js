import React from 'react';
import QuotesItem from './QuotesItem';
import Spinner from '../ui/Spinner';

const QuotesGrid = ({ isLoading, quotes }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {quotes.map((quote) => (
        <QuotesItem key={quote.quote_id} quote={quote} />
      ))}
    </section>
  );
};

export default QuotesGrid;
