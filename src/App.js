import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import TableMap from "./components/TableMap";
import TableList from './components/TableList'


function App() {
  const [tables, setTable] = useState("");
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <TableMap tables={tables} setTable={setTable} />
          </Col>
          <Col sm={6}>
            <TableList tables={tables} setTable={setTable} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
