import React, { useEffect, useState } from 'react';
import Axios from './utils/Axios';

function App() {
  useEffect(() => {}, []);

  const getAllVideoGames = async () => {
    try {
      const res = await Axios.get('/Games');
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h3>Test!</h3>
    </div>
  );
}

export default App;
