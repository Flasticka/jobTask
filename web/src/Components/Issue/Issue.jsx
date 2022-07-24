import './Issue.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
export const Issue = ({ issue, setIssue, setPage }) => {
  console.log(issue.state);
  return (
    <div className='issue-container'>
      <div
        className='circle-border'
        style={{
          border: issue.state === 'open' ? '3px solid green' : '3px solid red',
        }}
      >
        {issue.state === 'open' ? (
          <div className='circle-inner'></div>
        ) : (
          <div className='issue-container--closed'>/</div>
        )}
      </div>
      <div className='issue-container__right-part-container'>
        <div className='issue-container__title-container'>
          <Link to='/issue'>
            <button
              onClick={() => {
                setIssue(issue);
              }}
              className='issue-container__title'
            >
              {issue.title}
            </button>
          </Link>

          <div>
            <span>{`#${issue.issueNumber}`}</span>
            <span>{issue.state === 'open' ? 'opened' : 'closed'}</span>
            <span>
              {issue.state === 'open'
                ? moment(issue.created).fromNow()
                : moment(issue.closed).fromNow()}
            </span>
          </div>
        </div>

        <div className='issue-container__commets-container'>
          <span>{issue.commentsCount}</span>
          <span className='commets-container__comments'>comments</span>
        </div>
      </div>
    </div>
  );
};
