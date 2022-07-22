import './UpperPartRepoRightSide.css';

export const UpperPartRepoRightSide = () => {
  return (
    <div className='upper-part__right-side'>
      <div className='watch-button'>
        <button>
          <span>Watch</span>
          <span className='number-span'>3.1k</span>
          <div className='triangle-shape--no-hover'></div>
        </button>
      </div>
      <div className='two-buttons'>
        <button className='two-buttons__first-button'>
          <span>Fork</span>
          <span className='number-span'>21.9k</span>
        </button>
        <button className='two-buttons__second-button'>
          <div className='triangle-shape--no-hover'></div>
        </button>
      </div>
      <div className='two-buttons'>
        <button className='two-buttons__first-button'>
          <span>Star</span>
          <span className='number-span'>82.2k</span>
        </button>
        <button className='two-buttons__second-button'>
          <div className='triangle-shape--no-hover'></div>
        </button>
      </div>
    </div>
  );
};
