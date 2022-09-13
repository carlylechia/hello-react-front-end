import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Messages from './components/messages';

const API_URL = 'http://localhost:3000/api/v1/messages';

function getApiData() {
  return axios.get(API_URL).then(response => response.data)
}

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    let mounted = true;
    getApiData().then((item) => {
      if (mounted) {
        setMessage(item.text)
        console.log(item.text)
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div className="App">
      <Messages message={message} />
    </div>
  );
}

export default App;
