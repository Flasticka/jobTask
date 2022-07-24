import { HeaderBar } from '../HeaderBar/HeaderBar.jsx';
import { RepoInfo } from '../RepoInfo/RepoInfo.jsx';
import { BodyPart } from '../BodyPart/BodyPart.jsx';
import { Footer } from '../Footer/Footer.jsx';
import './MainPage';
export const MainPage = ({ setIssue }) => {
  return (
    <>
      <HeaderBar />
      <RepoInfo />
      <BodyPart setIssue={setIssue} />
      <div className='hr-container'>
        <hr></hr>
      </div>
      <Footer />
    </>
  );
};
