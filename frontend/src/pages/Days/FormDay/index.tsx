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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sentimento</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FormDay;
