import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';


const QuoteDetail = () => {

    const match = useRouteMatch();
    const params = useParams();
    const {quoteId} = params;

    const { sendRequest, status, data: loadedData, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (<div className="centered"><LoadingSpinner /></div>);
    }
    if (error) {
        return (<p className="centered focused">{error}</p>);
    }

    if (!loadedData.text) {
        return <h2>No Quote find !!!</h2>
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedData.text} author={loadedData.author} />
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
