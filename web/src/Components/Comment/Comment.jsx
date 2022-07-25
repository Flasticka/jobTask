import { Issue } from '../Issue/Issue';
import './Comment.css';
export const Comment = ({ comment }) => {
  return (
    <div className='comment-container'>
      <img
        className='comment-container__user-photo'
        src={comment.userPhoto}
        alt=''
      ></img>
      <div className='comment'>
        <div className='comment__header'>{comment.userName}</div>
        <div className='comment__body'>{comment.commentBody}</div>
      </div>
    </div>
  );
};
