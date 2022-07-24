import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IssuePage } from './Components/IssuePage/IssuePage.jsx';
import { MainPage } from './Components/MainPage/MainPage.jsx';

function App() {
  const [issue, setIssue] = useState(null);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage setIssue={setIssue} />}></Route>
          <Route path='/issue' element={<IssuePage issue={issue} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
