import './HeaderBar.css'
import { ReactComponent as GitHubLogo} from '../../assets/github-logo.svg';
export const HeaderBar = () => {
    return(
        <header>
            <div className='header-container'>
                <div className='header-container__right-side'>
                    <div className='github-logo'>
                        <GitHubLogo />   
                    </div>
                </div>
                <div className='header-container__left-side'>
                    
                </div>
            </div>
        </header>
    )
}