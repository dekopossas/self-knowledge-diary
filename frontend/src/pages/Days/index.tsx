import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import api from '../../services/api';

function Days() {
  
  async function loadDays() {
    const response = await api.get('/days');
    console.log(response);
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Days;
