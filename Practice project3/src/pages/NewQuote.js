import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const onAddQuoteHandler = (quoteData) => {
        console.log(quoteData);
    };
    return (
      <QuoteForm onAddQuote={onAddQuoteHandler}/>
    )
}

export default NewQuote
