import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import CommentsList from './CommentsList';

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
  let comments;
  if (status === 'pending') {
    comments = <div className="centered"><LoadingSpinner /></div>;
  }

  if (status === 'completed' && (loadedComment && loadedComment.length > 0)) {
    comments = <CommentsList comments={loadedComment} />;
  }
  if (status === 'completed' && (!loadedComment && loadedComment.length === 0)) {
    comments = <p className="centered">No comments added yet !</p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddComment={addCommentsHandler} quoteId={quoteId} />}
    {comments}
    </section>
  );
};

export default Comments;
