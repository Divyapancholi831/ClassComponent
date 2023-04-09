import logo from './logo.svg';
import './App.css';
import Register from './Register';
import {useState} from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import SearchParams from './SearchParams';
import Detail from './DetailsPet';
import {ThemeContext,  PetContext } from './ThemeContext';

function App() {
  const theme = useState("peru");
  const pet = useState([]);
  console.log("theme",theme);
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
      <Link to="/"> Home </Link>
      <Link to="/registartion"> Registration </Link>
      <Link to="/animaldata"> AnimalData </Link>
      </nav>
      <ThemeContext.Provider value={theme}>
      <Routes>
        <Route element={<Register/>} path="/registartion"></Route>
        
        <Route element={<PetContext.Provider value={pet}><SearchParams/></PetContext.Provider>} path="/animaldata"></Route>
        <Route element={<PetContext.Provider value={pet}><Detail/></PetContext.Provider>} path="/detail/:id"></Route>
        
      </Routes>
      </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
