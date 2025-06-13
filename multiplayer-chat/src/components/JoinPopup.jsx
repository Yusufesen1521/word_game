import { useState } from 'react';

export default function JoinPopup({ onClose, onJoin }) {
  const [roomCode, setRoomCode] = useState('');

  return (
    <div style={{
      position: 'fixed', top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white', padding: 20, border: '1px solid #ccc', zIndex: 1000
    }}>
      <h3>Oda Kodu Girin</h3>
      <input
        type="text"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
        placeholder="Oda Kodu"
      />
      <br /><br />
      <button onClick={() => onJoin(roomCode)}>Katıl</button>
      <button onClick={onClose} style={{ marginLeft: 10 }}>İptal</button>
    </div>
  );
}
