import Popup from 'reactjs-popup';
import './FilterOptions.css';
export const FilterOptions = () => {
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
          <button>Newest</button>
          <button>Most comented</button>
          <button>Least comented</button>
        </div>
      </Popup>
    </div>
  );
};
