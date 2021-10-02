import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
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
  // ----------------------------------------------------------------
  // States
  // ----------------------------------------------------------------
  const [days, setDays] = useState<IDay[]>([]);

  // ----------------------------------------------------------------
  // Functions
  // ----------------------------------------------------------------
  async function loadDays() {
    const response = await api.get('/days');
    setDays(response.data);
  }

  const setFeeling = (number: number) => {
    if (number === 1){
      return <Button variant="warning">Alegria</Button>
    }
    if (number === 2){
      return <Button variant="danger">Raiva</Button>
    }
    if (number === 3){
      return <Button variant="secondary">Medo</Button>
    }
    if (number === 4){
      return <Button variant="success">Nojo</Button>
    }
    if (number === 5){
      return <Button variant="primary">Tristeza</Button>
    }
  }

  // ----------------------------------------------------------------
  // Effects
  // ----------------------------------------------------------------
  useEffect(() => {
    loadDays();
  }, []);

  return (
    <div className="container">
      <br />

      <h1>Diário</h1>
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
              <td>
                {
                  setFeeling(day.feeling)
                }
              </td>
              <td>{day.because}</td>
              <td>{day.behaviors}</td>
              <td>{day.be_better}</td>
              <td>
                <button>edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Days;
