import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/body/Home";
import Tech from './components/body/Tech';
import Politics from './components/body/Politics';
import Entertainment from './components/body/Entertainment';
import Life from './components/body/Life';
import NFTs from './components/body/NFTs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route exact path="/tech" element={<Tech/>} />
      </Routes>
      <Routes>
        <Route exact path="/politics" element={<Politics/>} />
      </Routes>
      <Routes>
        <Route exact path="/entertainment" element={<Entertainment/>} />
      </Routes>
      <Routes>
        <Route exact path="/life" element={<Life/>} />
      </Routes>
      <Routes>
        <Route exact path="/nfts" element={<NFTs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
