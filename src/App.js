import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import TableMap from "./components/TableMap";
import DropDown from "./components/DropD";



function App() {

  const [tables, setTable] = useState("")
  const [tableState, setTableState] = useState(true)
  const [floorState, setFloorState] = useState(true);
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <DropDown
              tables={tables}
              setTable={setTable}
              tableState={tableState}
              setTableState={setTableState}
              floorState={floorState}
              setFloorState={setFloorState}
            />
          </Col>
          <Col sm={2}>
            <TableMap
              tables={tables}
              tableState={tableState}
              setTableState={setTableState}
              floorState={floorState}
              setFloorState={setFloorState}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
