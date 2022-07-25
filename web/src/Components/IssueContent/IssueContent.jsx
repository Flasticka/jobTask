import moment from 'moment';
import { Comment } from '../Comment/Comment';
import './IssueContent.css';
export const IssueContent = ({ issue }) => {
  return (
    <div className='issue-body-container-outer'>
      <div className='issue-body-container-inner'>
        <div className='title-container'>
          <div className='title-container__title'>
            {issue.title} <span>{`#${issue.issueNumber}`}</span>
          </div>
          <div className='title-container__info'>
            <button
              style={{
                backgroundColor:
                  issue.state === 'open' ? 'rgb(8, 200, 8)' : 'grey',
              }}
            >
              <div className='circle-border'>
                {issue.state === 'open' ? (
                  <div className='circle-inner'></div>
                ) : (
                  <div className='issue-container--closed'>/</div>
                )}
              </div>
              <span>{issue.state[0].toUpperCase() + issue.state.slice(1)}</span>
            </button>
            <span>{`issue ${issue.state ? 'opened' : 'closed'}`}</span>
            <span>
              {issue.state === 'open'
                ? moment(issue.created).fromNow()
                : moment(issue.closed).fromNow()}
            </span>
            <div>
              <span>{issue.commentsCount}</span>
              <span className='commets-container__comments'>comments</span>
            </div>
          </div>
        </div>
        <hr />
        <div className='comment-body'>{issue.body}</div>
        <hr />
        <div className='comments'>
          {issue.comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};
