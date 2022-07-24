import { HeaderBar } from './Components/HeaderBar/HeaderBar.jsx';
import { RepoInfo } from './Components/RepoInfo/RepoInfo.jsx';
import { BodyPart } from './Components/BodyPart/BodyPart.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className='App'>
      <HeaderBar />
      <RepoInfo />
      <BodyPart />
      <div className='hr-container'>
        <hr></hr>
      </div>

      <Footer />
    </div>
  );
}

export default App;
