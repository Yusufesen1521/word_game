import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JoinPopup from '../components/JoinPopup';

export default function HomeScreen() {
  const [playerName, setPlayerName] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleCreateGame = () => {
    if (playerName.trim()) {
      navigate('/game', { state: { playerName } });
    }
  };

  const handleJoinGame = (roomCode) => {
    if (playerName.trim() && roomCode.trim()) {
      navigate('/game', { state: { playerName, roomCode } });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Oyuncu İsmi</h2>
      <input
        type="text"
        placeholder="İsminizi girin"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <br /><br />
      <button onClick={handleCreateGame}>Oyun Oluştur</button>
      <button onClick={() => setShowPopup(true)}>Oyuna Katıl</button>

      {showPopup && (
        <JoinPopup
          onClose={() => setShowPopup(false)}
          onJoin={handleJoinGame}
        />
      )}
    </div>
  );
}
