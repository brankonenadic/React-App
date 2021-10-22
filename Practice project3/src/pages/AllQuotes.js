import {useEffect} from 'react'
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

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
    const {sendRequest , status, data: loadedData, error} = useHttp(getAllQuotes, true);
useEffect(() => {
    sendRequest();
}, [sendRequest]);
if (status === 'pending') {
    return (<div className="centered"><LoadingSpinner /></div>);
}

    return (
       <QuoteList quotes={DUMMY_DATA} />
    )
}

export default AllQuotes
