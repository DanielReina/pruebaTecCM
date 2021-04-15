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

const TableMap = ({ tables, setTable, plan}) => {
  let component = <Floor1 />;

   const tablesInfo = plan.tables;
   let arrTablesJson = [];
   for (const property in tablesInfo) {
     arrTablesJson.push(tablesInfo[property]);
   }

  const [floor, setFloor] = useState(1);

  if (floor === 1) {
    component = <Floor1 tables={tables} arrTablesJson={arrTablesJson} />;
  } else if (floor === 2) {
    component = <Floor2 tables={tables} arrTablesJson={arrTablesJson} />;
  } else if (floor === 3) {
    component = <Floor3 tables={tables} arrTablesJson={arrTablesJson} />;
  }

  let changeFloor = () => {
    setTable("");
    if (floor === 1) {
      setFloor(2);
    } else if (floor === 2) {
      setFloor(3);
    } else if (floor === 3) {
      setFloor(1);
    }
  };

  useEffect(() => {
    if (
      (tables === arrTablesJson[0].name_table) |
      (tables === arrTablesJson[1].name_table) |
      (tables === arrTablesJson[2].name_table) |
      (tables === arrTablesJson[3].name_table)
    ) {
      setFloor(1);
    } else if (
      (tables === arrTablesJson[4].name_table) |
      (tables === arrTablesJson[5].name_table)
    ) {
      setFloor(2);
    } else if (
      (tables === arrTablesJson[6].name_table) |
      (tables === arrTablesJson[7].name_table)
    ) {
      setFloor(3);
    }
  }, [tables]);

  return (
    <>
      <section id="section1">
        {floor === 1 ? (
          <Paragraph>
            {plan.floors[201].name} - {plan.zones[370].name}
          </Paragraph>
        ) : floor === 2 ? (
          <Paragraph>{plan.floors[202].name} - {plan.zones[371].name}</Paragraph>
        ) : (
          <Paragraph>{plan.floors[203].name} - {plan.zones[372].name}</Paragraph>
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
      </section>
    </>
  );
};

export default TableMap;
