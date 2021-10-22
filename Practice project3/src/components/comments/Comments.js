import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: loadedComment } = useHttp(getAllComments);
  const params = useParams();
  const { quoteId } = params;
  
  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);
  
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const addCommentsHandler = () => {

  };
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddComment={addCommentsHandler} quoteId={quoteId} />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
