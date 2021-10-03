// Package
import React, { useState, useEffect } from 'react';

// API
import api from '../../../services/api';

// Lib

// Style
import { Button } from 'react-bootstrap';
import styles from './style.module.scss';

interface IDay {
  id: number;
  feeling: number;
  because: string;
  behaviors: string;
  be_better: string;
  created_at: Date;
  updated_at: Date;
}

function FormDay() {
  // ----------------------------------------------------------------
  // States
  // ----------------------------------------------------------------


  // ----------------------------------------------------------------
  // Functions
  // ----------------------------------------------------------------


  // ----------------------------------------------------------------
  // Effects
  // ----------------------------------------------------------------

  return (
    <div className="container">
      <br />
      <div className={styles.day_header}>
        <h1>Nova Obrservação</h1>
        <Button variant="dark" size="sm">Voltar</Button>
      </div>
      <br />
    </div>
  );
}

export default FormDay;
