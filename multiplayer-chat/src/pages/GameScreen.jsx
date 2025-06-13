import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function GameScreen() {
  const { state } = useLocation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, `${state.playerName}: ${input}`]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Oyun Ekranı</h2>
      <div
        style={{
          border: '1px solid #ccc', padding: 10, height: 300,
          overflowY: 'scroll', marginBottom: 10, background: '#fff'
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Mesaj yazın..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage} style={{ marginLeft: 10 }}>Gönder</button>
    </div>
  );
}
