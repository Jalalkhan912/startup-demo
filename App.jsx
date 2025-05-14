// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [visits, setVisits] = useState(0);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate fetching visitor count from API
    setIsLoading(true);
    setTimeout(() => {
      // This would be an API call in real application
      const randomVisits = Math.floor(Math.random() * 1000) + 100;
      setVisits(randomVisits);
      setIsLoading(false);
    }, 1000);
    
    // Fetch messages
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    // This would be a real API call in production
    setTimeout(() => {
      setMessages([
        { id: 1, text: "Welcome to our startup!" },
        { id: 2, text: "We're glad you're here!" },
        { id: 3, text: "Explore our services" }
      ]);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // In production, this would send to API
    setMessages([...messages, { id: Date.now(), text: message }]);
    setMessage('');
  };

  return (
    <div className="app">
      <header>
        <h1>Startup Demo Application</h1>
        <p className="subtitle">Cloud Computing Lab Project</p>
      </header>

      <main>
        <section className="visitor-section">
          <div className="card">
            <h2>Visitor Statistics</h2>
            {isLoading ? (
              <p>Loading stats...</p>
            ) : (
              <p className="stat-number">{visits} visits today</p>
            )}
          </div>
        </section>

        <section className="message-section">
          <div className="card">
            <h2>Message Board</h2>
            
            <form onSubmit={handleSubmit} className="message-form">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="message-input"
              />
              <button type="submit" className="submit-btn">Send</button>
            </form>
            
            <div className="messages-container">
              {messages.map(msg => (
                <div key={msg.id} className="message-item">
                  {msg.text}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Startup Demo | UET Mardan Cloud Computing Lab</p>
      </footer>
    </div>
  );
}

export default App;