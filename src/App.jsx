import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';

// לשנות את זה לכתובת שצריך
const CONNECTION_URL = 'https://google.com';

export function App(props) {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      const response = await fetch(CONNECTION_URL);
      const data = await response.json();
      // פה ציך להתממשק עם השרת ולבדוק סטטוס חיבור
      console.log(data)
    };

    checkConnection();
  }, []);

  return (
    <div>
      <h1>סטטוס</h1>
      {isConnected ? 'מחובר' : 'לא מחובר'}
      <br />
      <h1>התחברות</h1>
      <Login />
      <br />
      <h1>הרשמה</h1>
      <Register />
    </div>
  );
}
