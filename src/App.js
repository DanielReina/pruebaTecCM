import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import TableMap from "./components/TableMap";
import DropD from './components/DropD'




function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
          <DropD />
            <TableMap />
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
