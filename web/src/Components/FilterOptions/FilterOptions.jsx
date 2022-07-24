import Popup from 'reactjs-popup';
import './FilterOptions.css';
export const FilterOptions = ({ orderType, setOrderType }) => {
  return (
    <div className='filter-option-container'>
      <button>
        <span>Author</span>
        <div className='triangle-shape--no-hover'></div>
      </button>
      <button>
        <span>Label</span>
        <div className='triangle-shape--no-hover'></div>
      </button>
      <button>
        <span>Projects</span>
        <div className='triangle-shape--no-hover'></div>
      </button>
      <button>
        <span>Milestones</span>
        <div className='triangle-shape--no-hover'></div>
      </button>
      <button>
        <span>Assignee</span>
        <div className='triangle-shape--no-hover'></div>
      </button>
      <Popup
        trigger={
          <button>
            <span>Sort</span>
            <div className='triangle-shape--no-hover'></div>
          </button>
        }
      >
        <div className='pop-up-window'>
          <span>Sort</span>
          <button
            className={`${
              orderType === 'issue-number'
                ? 'pop-up-window__selected-button'
                : ''
            }`}
            onClick={() => {
              setOrderType('issue-number');
            }}
          >
            Issue number
          </button>
          <button
            className={`${
              orderType === 'most-commented'
                ? 'pop-up-window__selected-button'
                : ''
            }`}
            onClick={() => {
              setOrderType('most-commented');
            }}
          >
            Most comented
          </button>
          <button
            className={`${
              orderType === 'least-commented'
                ? 'pop-up-window__selected-button'
                : ''
            }`}
            onClick={() => {
              setOrderType('least-commented');
            }}
          >
            Least comented
          </button>
        </div>
      </Popup>
    </div>
  );
};
