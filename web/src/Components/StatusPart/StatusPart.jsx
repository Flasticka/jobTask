import './StatusPart.css';
export const StatusPart = ({
  isOpenSelected,
  setIsOpenSelected,
  openIssues,
  closedIssues,
}) => {
  return (
    <div className='status-container'>
      <button
        style={{
          fontWeight: isOpenSelected ? 'bold' : 'normal',
          color: isOpenSelected ? 'black' : 'grey',
        }}
        onClick={() => {
          setIsOpenSelected(true);
        }}
      >
        <div
          className='circle-border'
          style={{
            border: isOpenSelected ? '3px solid black' : '3px solid grey',
          }}
        >
          <div
            className='circle-inner'
            style={{
              'background-color': isOpenSelected ? 'black' : 'grey',
            }}
          ></div>
        </div>
        <span>{openIssues.length}</span>
        <span>Open</span>
      </button>
      <button
        style={{
          fontWeight: isOpenSelected ? 'normal' : 'bold',
          color: isOpenSelected ? 'grey' : 'black',
        }}
        onClick={() => {
          setIsOpenSelected(false);
        }}
      >
        <div
          className='circle-border'
          style={{
            border: isOpenSelected ? '3px solid grey' : '3px solid black',
          }}
        >
          <span
            className='closed-status'
            style={{
              color: isOpenSelected ? 'grey' : 'black',
              fontWeight: 'normal',
            }}
          >
            /
          </span>
        </div>
        <span>{closedIssues.length}</span>
        <span>Closed</span>
      </button>
    </div>
  );
};
