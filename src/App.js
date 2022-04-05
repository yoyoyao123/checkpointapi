import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Details from './components/pages/Details';

function App() {
  return (
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/detail/:id" element={<Details/>} />
   </Routes>
  );
}

export default App;

