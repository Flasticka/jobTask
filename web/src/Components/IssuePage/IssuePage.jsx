import { HeaderBar } from '../HeaderBar/HeaderBar.jsx';
import { RepoInfo } from '../RepoInfo/RepoInfo.jsx';
import { IssueContent } from '../IssueContent/IssueContent.jsx';
export const IssuePage = ({ issue }) => {
  return (
    <>
      <HeaderBar />
      <RepoInfo />
      <IssueContent issue={issue} />
    </>
  );
};
