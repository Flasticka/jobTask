import { HeaderBar } from '../HeaderBar/HeaderBar.jsx';
import { RepoInfo } from '../RepoInfo/RepoInfo.jsx';
import { IssueContent } from '../IssueContent/IssueContent.jsx';
import { Footer } from '../Footer/Footer.jsx';
import '../MainPage/MainPage.css';
export const IssuePage = ({ issue }) => {
  return (
    <>
      <HeaderBar />
      <RepoInfo />
      <IssueContent issue={issue} />
      <div className='hr-container'>
        <hr></hr>
      </div>
      <Footer />
    </>
  );
};
