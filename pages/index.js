import React from 'react'
import { Button } from 'react-bootstrap';
import Styles from './style.module.css'
import {Row,Col} from 'react-bootstrap';
import Grid from '@mui/material/Grid';

export default function index() {
  return (
    <div>
     <Row>
      <Col md={12} sm={6} xs={12}>sd
      </Col>
      <Col md={12} sm={6} xs={6}>sd
      </Col>
      <Col md={12} sm={6} xs={6}>ssd
      </Col>
     </Row>
    </div>
  )
}

