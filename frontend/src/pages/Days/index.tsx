import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import api from '../../services/api';

function Days() {
  const [days, setDays] = useState([]);

  async function loadDays() {
    const response = await api.get('/days');
    console.log(response);
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
            <th>#</th>
            <th>Sentimento: </th>
            <th>Gatilho: </th>
            <th>Reação: </th>
            <th>Melhorias: </th>
          </tr>
        </thead>
        <tbody>
          {
            days.map(day => {
              <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Days;
