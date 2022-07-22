import './NoBorderedButton.css';
export const NoBorderedButton = ({ obj }) => {
  return (
    <div
      className='no-bordered-button-container'
      style={{
        'border-bottom': obj.selected ? '3px solid orange' : '0',
        'paddingBottom': obj.selected ? 'calc(0.5rem - 3px)' : '0.5rem',
      }}
    >
      <button
        className='no-bordered-button-container__button'
        onClick={obj.callback}
      >
        <div
          className='no-bordered-button-container__name-button'
          style={{ 'font-weight': obj.selected ? 'bold' : 'normal' }}
        >
          {obj.name}
        </div>
        {obj.number !== null && (
          <span className='no-bordered-button-container__number-span'>
            {obj.number}
          </span>
        )}
      </button>
    </div>
  );
};
