import React from 'react'
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

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
    const params = useParams();
    const detail = DUMMY_DATA.find(quote => quote.id === params.quoteId);
    if (!detail) {
        return <h2>No Quote find !!!</h2>
    }
    
    return (
        <div>
            <HighlightedQuote text={detail.text} author={detail.author} />
            <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetail
