import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  }, [])

  return (
    <div>
      <h1>Friends:{friends.length}</h1>
      {
        friends.map(friend =><Friend)
      }
    </div>
  );
}

export default App;
