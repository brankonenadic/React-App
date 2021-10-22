import React from 'react'
import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import {getSingleQuote} from '../lib/api';

const DUMMY_DATA = [
    {
        id: 'q1',
        author: 'Jana',
        text: 'Love lirning React !',
    },
    {
        id: 'q2',
        author: 'Selma',
        text: 'Exercising is fun !',
    },
    {
        id: 'q3',
        author: 'Marija',
        text: 'Time is for shopping !',
    }
];
const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const detail = DUMMY_DATA.find(quote => quote.id === params.quoteId);
    if (!detail) {
        return <h2>No Quote find !!!</h2>
    }

    return (
        <Fragment>
            <HighlightedQuote text={detail.text} author={detail.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>Live comment</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail
