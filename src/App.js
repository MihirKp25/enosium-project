import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Home } from './components/home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/dashboard' exact element={<Dashboard/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
