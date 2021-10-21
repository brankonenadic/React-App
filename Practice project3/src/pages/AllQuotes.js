import React from 'react'
import QuoteList from '../components/quotes/QuoteList';

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
const AllQuotes = () => {
    return (
       <QuoteList quotes={DUMMY_DATA} />
    )
}

export default AllQuotes
