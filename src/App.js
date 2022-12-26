import './App.css';
import Header from './component/header/Header';
import Home from './component/header/body/Home';
import DetailView from './component/header/details/DetailView';
import{BrowserRouter,Routes,Route}from 'react-router-dom';
import Navbar from './component/header/navbar/Navbar';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<DetailView/>}/>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
