import React, { useState, useEffect } from "react";
import { PanZoom } from "react-easy-panzoom";
import styled from "styled-components";
import Floor1 from "./Floors/Floor1";
import Floor2 from "./Floors/Floor2";
import Floor3 from "./Floors/Floor3";

const H2 = styled.h2`
  width: 400px;
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
  text-transform: uppercase;
`;

const Button = styled.button`
  position: relative;
  left: 300px;
  bottom: 50px;
  width: 100px;
  height: 50px;
  background-color: rgb(255, 240, 212);
  border-top-left-radius: 5px;

  @media (max-width: 549px) {
    left: 200px;
    bottom: 50px;
    margin-left: 35%;
  }
`;

const TableMap = ({ tables, setTable, plan }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tables]);

  return (
    <>
      <section id="section1">
        {floor === 1 ? (
          <H2>
            {plan.floors[201].name} - {plan.zones[370].name}
          </H2>
        ) : floor === 2 ? (
          <H2>
            {plan.floors[202].name} - {plan.zones[371].name}
          </H2>
        ) : (
          <H2>
            {plan.floors[203].name} - {plan.zones[372].name}
          </H2>
        )}
        {window.innerWidth < 550 ? (
          <PanZoom
            id="panzoom"
            boundaryRatioVertical={0}
            boundaryRatioHorizontal={0}
            enableBoundingBox
            style={{ width: 400, height: 400 }}
            maxZoom={1.17}
            minZoom={0.7}
          >
            {component}
          </PanZoom>
        ) : (
          <PanZoom
            id="panzoom"
            boundaryRatioVertical={0}
            boundaryRatioHorizontal={0}
            enableBoundingBox
            style={{ width: 400, height: 400 }}
            maxZoom={1.53}
            minZoom={0.7}
          >
            {component}
          </PanZoom>
        )}

        <Button onClick={changeFloor}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
          </svg>
        </Button>
      </section>
    </>
  );
};

export default TableMap;
