
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import MainPage from './Components/MainPage/MainPage';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className='App-background'>
      <BrowserRouter>
      <Routes>
        <Route path="" element={ <LoginPage/>} />
        <Route path="main-page" element={<MainPage/>}/>
        
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
