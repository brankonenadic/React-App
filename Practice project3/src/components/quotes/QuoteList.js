import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};
const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSorting = queryParams.get('sort') === 'asc'; 
  const sortingQuotes = sortQuotes(props.quotes, isSorting);
  const sortHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSorting ? 'desc' : 'asc')}`
    });
    /* history.push('/quotes?sort=' + (isSorting ? 'desc' : 'asc')); */
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler}>Sort {isSorting ? 'Descending' : 'Ascrnding'} </button>
      </div>
      <ul className={classes.list}>
        {sortingQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
