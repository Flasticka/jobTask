import { HeaderBar } from './Components/HeaderBar/HeaderBar.jsx';
import { RepoInfo } from './Components/RepoInfo/RepoInfo.jsx';
import { BodyPart } from './Components/BodyPart/BodyPart.jsx';

function App() {
  return (
    <div className='App'>
      <HeaderBar />
      <RepoInfo />
      <BodyPart />
    </div>
  );
}

export default App;
