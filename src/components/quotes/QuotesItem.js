import React from 'react';

const QuotesItem = ({ quote }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front-q'>
          {'"'}
          {quote.quote}
          {'"'}
        </div>
        <div className='card-back'>
          <h1>{quote.author}</h1>
        </div>
      </div>
    </div>
  );
};

export default QuotesItem;
