import './Issue.css';
import moment from 'moment';
export const Issue = (issue) => {
  console.log(issue.issue.state);
  return (
    <div className='issue-container'>
      <div
        className='circle-border'
        style={{
          border:
            issue.issue.state === 'open' ? '3px solid green' : '3px solid red',
        }}
      >
        {issue.issue.state === 'open' ? (
          <div className='circle-inner'></div>
        ) : (
          <div className='issue-container--closed'>/</div>
        )}
      </div>
      <div className='issue-container__right-part-container'>
        <div className='issue-container__title-container'>
          <button onClick={() => {}} className='issue-container__title'>
            {issue.issue.title}
          </button>
          <div>
            <span>{`#${issue.issue.issueNumber}`}</span>
            <span>{issue.issue.state === 'open' ? 'opened' : 'closed'}</span>
            <span>
              {issue.issue.state === 'open'
                ? moment(issue.issue.created).fromNow()
                : moment(issue.issue.closed).fromNow()}
            </span>
          </div>
        </div>

        <div className='issue-container__commets-container'>
          <span>{issue.issue.commentsCount}</span>
          <span className='commets-container__comments'>comments</span>
        </div>
      </div>
    </div>
  );
};
