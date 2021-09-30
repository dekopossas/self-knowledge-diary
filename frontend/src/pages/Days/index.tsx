import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import api from '../../services/api';

interface IDay {
  id: number;
  feeling: number;
  because: string;
  behaviors: string;
  be_better: string;
  created_at: Date;
  updated_at: Date;
}

function Days() {
  const [days, setDays] = useState<IDay[]>([]);

  async function loadDays() {
    const response = await api.get('/days');
    setDays(response.data);
  }

  useEffect(() => {
    loadDays();
  }, []);

  return (
    <div className="container">
      <br />

      <h1>Days Pages</h1>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Data: </th>
            <th>Sentimento: </th>
            <th>Gatilho: </th>
            <th>Reação: </th>
            <th>Melhorias: </th>
            <th>Ações: </th>
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day.id}>
              <td>{day.created_at}</td>
              <td>{day.feeling}</td>
              <td>{day.because}</td>
              <td>{day.behaviors}</td>
              <td>{day.be_better}</td>
              <td><button>edit</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Days;
