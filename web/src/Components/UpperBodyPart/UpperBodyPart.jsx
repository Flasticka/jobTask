import './UpperBodyPart.css';
export const UpperBodyPart = () => {
  return (
    <div className='upper-body-part-container'>
      <div className='upper-body-part-container__searching-bar'>
        <button className='searching-bar__filter-button'>
          <span>Filters</span>
          <div className='triangle-shape--no-hover'></div>
        </button>
        <input className='searching-bar__search-bar'></input>
      </div>
      <div className='upper-body-part-container__buttons'>
        <div className='double-button'>
          <button className='buttons_labels'>
            <span>Labels</span>
            <span className='number-span'>234</span>
          </button>
          <button className='buttons_milestones'>
            <span>Milestones</span>
            <span className='number-span'>10</span>
          </button>
        </div>
        <button className='new-issue-button'>New issues</button>
      </div>
    </div>
  );
};
