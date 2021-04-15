import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import plan from "./plano.json";
import TableMap from "./components/TableMap";
import TableList from './components/TableList'


function App() {
  const [tables, setTable] = useState("");
  return (
    <>
      <Container>
        <Row>
          <Col lg={6} styles={{width:400}} >
            <TableMap tables={tables} setTable={setTable} plan={plan} />
          </Col>
          <Col lg={6}>
            <TableList tables={tables} setTable={setTable} plan={plan} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
