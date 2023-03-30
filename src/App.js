import logo from './logo.svg';
import './App.css';
import Register from './Register';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import SearchParams from './SearchParams';
import Detail from './DetailsPet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
      <Link to="/"> Home </Link>
      <Link to="/registartion"> Registration </Link>
      <Link to="/animaldata"> AnimalData </Link>
      </nav>
      <Routes>
        <Route element={<Register/>} path="/registartion"></Route>
        <Route element={<SearchParams/>} path="/animaldata"></Route>
        <Route element={<Detail/>} path="/detail/:id"></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
