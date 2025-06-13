import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import GameScreen from './pages/GameScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
