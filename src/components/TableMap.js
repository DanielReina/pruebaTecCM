import React, { useState, useEffect } from "react";
import { PanZoom } from "react-easy-panzoom";
import styled from "styled-components";
import Floor1 from "./Floors/Floor1";
import Floor2 from "./Floors/Floor2";
import Floor3 from "./Floors/Floor3";

const Paragraph = styled.p`
  width: 400px;
  text-align: center;
  margin-bottom: 15px;
`;

const Button = styled.button`
  position: relative;
  left: 300px;
  bottom: 50px;
  width: 100px;
  height: 50px;
  background-color: rgb(214, 115, 115);
`;

const TableMap = ({
  tables,
  tableState,
  setTableState,
  floorState,
  setFloorState
}) => {
  let component = <Floor1 />;

  const [floor, setFloor] = useState(1);

  if (floor === 1) {
    component = <Floor1 />;
  } else if (floor === 2) {
    component = <Floor2 />;
  } else if (floor === 3) {
    component = <Floor3 />;
  }

  let changeFloor = () => {
    setTableState(false)
    setFloorState(true)
    if (tableState === false && floor === 1) {
      setFloor(2);
    } else if (tableState === false && floor === 2) {
      setFloor(3);
    } else if (tableState === false && floor === 3) {
      setFloor(1);
    }
  };

  useEffect(() => {
    if (
      (tableState && floorState === false && tables === "Mesa 1") |
      (tableState && floorState === false && tables === "Mesa 2") |
      (tableState && floorState === false && tables === "Mesa 3") |
      (tableState && floorState === false && tables === "Mesa 4")
    ) {
      setFloor(1);
    } else if (
      (tableState && floorState === false && tables === "Mesa 5") |
      (tableState && floorState === false && tables === "Mesa 6")
    ) {
      setFloor(2);
    } else if (
      (tableState && floorState === false && tables === "Mesa 7") |
      (tableState && floorState === false && tables === "Mesa 8")
    ) {
      setFloor(3);
    }else if (tableState === false && floor === 1) {
      setFloor(2);
      setTableState(true);
    } else if (tableState === false && floor === 2) {
      setFloor(3);
      setTableState(true);
    } else if (tableState === false && floor === 3) {
      setFloor(1);
      setTableState(true);
    }
  });

  return (
    <>
      <div id="container">
        {floor === 1 ? (
          <Paragraph>Planta 1 - Z1</Paragraph>
        ) : floor === 2 ? (
          <Paragraph>Planta 2 - Z2</Paragraph>
        ) : (
          <Paragraph>Planta 3 - Z3</Paragraph>
        )}
        <PanZoom
          boundaryRatioVertical={0}
          boundaryRatioHorizontal={0}
          enableBoundingBox
          style={{ width: 400, height: 400, border: "solid 2px blue" }}
          maxZoom={1.53}
          minZoom={0.7}
        >
          {component}
        </PanZoom>
        <Button onClick={changeFloor}>Siguiente Planta</Button>
      </div>
    </>
  );
};

export default TableMap;
