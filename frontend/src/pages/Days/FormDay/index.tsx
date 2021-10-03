// Package
import React, { useState, useEffect } from 'react';

// API
import api from '../../../services/api';

// Lib

// Style
import { Button, Form } from 'react-bootstrap';
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
  const [model, setModel] = useState({
    feeling: '',
    because: '',
    behaviors: '',
    be_better: '',
  })

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
        <h2>Nova Obrservação</h2>
        <Button variant="dark" size="sm">
          Voltar
        </Button>
      </div>
      <br />
      <div className="container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Sentimento:</Form.Label>
            <br />
            <Form.Check value={1} inline name="feeling" type="radio" label="Alegria" />
            <Form.Check value={2} inline name="feeling" type="radio" label="Raiva" />
            <Form.Check value={3} inline name="feeling" type="radio" label="Medo" />
            <Form.Check value={4} inline name="feeling" type="radio" label="Nojo" />
            <Form.Check value={5} inline name="feeling" type="radio" label="Tristeza" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Gatilho:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Como reagil:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Como poderia ter reagido:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Salvar Obrservação
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FormDay;
