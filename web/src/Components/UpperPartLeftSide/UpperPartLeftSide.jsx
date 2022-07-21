import './UpperPartLeftSide.css';
export const UpperPartLeftSide = () => {
  return (
    <div className='upper-part__left-side'>
      <a href='.' className='repo-name'>
        <span>angular</span>
      </a>

      <span className='separator'>/</span>
      <a href='.' className='repo-name repo-name--bold'>
        <span>angular</span>
      </a>
      <span className='repo-visibility'>Public</span>
    </div>
  );
};
