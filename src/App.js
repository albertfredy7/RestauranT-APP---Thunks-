
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import RestView from './pages/RestView';

function App() {
  return (
    <div className="App">
      <Header/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/restuarant-view/:id" element={<RestView/>}/>
        </Routes>
        <Footer/>
      
    </div>
  );
}

export default App;
