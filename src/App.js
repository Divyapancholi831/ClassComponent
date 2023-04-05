import logo from './logo.svg';
import './App.css';
import Register from './Register';
import {useState} from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import SearchParams from './SearchParams';
import Detail from './DetailsPet';
import ThemeContext from './ThemeContext';

function App() {
  const theme = useState("peru");
  console.log("theme",theme);
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
        <Route element={<ThemeContext.Provider value={theme}><SearchParams/></ThemeContext.Provider>} path="/animaldata"></Route>
        <Route element={<ThemeContext.Provider value={theme}><Detail/></ThemeContext.Provider>} path="/detail/:id"></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
