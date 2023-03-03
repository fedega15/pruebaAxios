import React, { useState, useEffect } from 'react';
import api from './api';

function App() {
  const [choferes, setChoferes] = useState([]);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiZ3VzdGF2byIsImV4cCI6MTY3ODI4MDEwMywiaWF0IjoxNjc3ODEwNjk3fQ.lH8-ssHGiwLOvj5mGqs6Mo7dckj40piaIIQWRL6OF-M'
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        "http://webports.duckdns.org:5000/choferes_listar",
        {
          token,
        }
      );
      console.log(result);
    ;
      const data = await response.json();
      setChoferes(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {choferes.map((chofer) => (
        <div key={chofer.id}>
          <h2>{chofer.nombre}</h2>
          <p>{chofer.edad}</p>
          <p>{chofer.direccion}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
