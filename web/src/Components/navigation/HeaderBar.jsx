import './HeaderBar.css';
import { ReactComponent as GitHubLogo } from '../../assets/github-logo.svg';
import { ReactComponent as BellLogo } from '../../assets/bell-logo.svg';
export const HeaderBar = () => {
  return (
    <header>
      <div className='header-container'>
        <div className='header-container__right-side'>
          <a href='.' className='github-logo'>
            <GitHubLogo />
          </a>
          <div className='searching-bar'>
            <form>
              <input type='text' placeholder='Search or jump to...' />
            </form>
            <span>/</span>
          </div>
          <ul>
            <li>
              <a href='.'>Pull requests</a>
            </li>
            <li>
              <a href='.'>Issues</a>
            </li>
            <li>
              <a href='.'>Marketplace</a>
            </li>
            <li>
              <a href='.'>Explore</a>
            </li>
          </ul>
        </div>
        <div className='header-container__left-side'>
          <BellLogo />
          <div>
            +<div className='triangle-shape'></div>
          </div>
          <div>
            <img
              src='https://avatars.githubusercontent.com/u/84079159?s=40&v=4'
              alt='avatar'
            />
            <div className='triangle-shape'></div>
          </div>
        </div>
      </div>
    </header>
  );
};
