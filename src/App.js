
import './App.css';
import { Home } from './components/home';
import { Navbar } from './components/navbar';
import NewsSlider from './components/newsSlider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <NewsSlider/>
      
    </div>
  );
}

export default App;
