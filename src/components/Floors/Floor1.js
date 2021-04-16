import React from "react";

const Floor1 = ({ tables, arrTablesJson }) => {
  return (
    <>
      <div id="p1">
        <div
          className="tables"
          style={
            tables === "Mesa1"
              ? {
                  backgroundColor: "#6B87BF",
                  color: "white",
                  top: parseInt(arrTablesJson[0].y),
                  left: parseInt(arrTablesJson[0].x),
                }
              : {
                  top: parseInt(arrTablesJson[0].y),
                  left: parseInt(arrTablesJson[0].x),
                }
          }
        >
          {arrTablesJson[0].name_table}
        </div>
        <div
          className="tables"
          style={
            tables === "Mesa2"
              ? {
                  backgroundColor: "#6B87BF",
                  color: "white",
                  top: parseInt(arrTablesJson[1].y),
                  left: parseInt(arrTablesJson[1].x),
                }
              : {
                  top: parseInt(arrTablesJson[1].y),
                  left: parseInt(arrTablesJson[1].x),
                }
          }
        >
          {arrTablesJson[1].name_table}
        </div>
        <div
          className="tables"
          style={
            tables === "Mesa3"
              ? {
                  backgroundColor: "#6B87BF",
                  color: "white",
                  top: parseInt(arrTablesJson[2].y),
                  left: parseInt(arrTablesJson[2].x),
                }
              : {
                  top: parseInt(arrTablesJson[2].y),
                  left: parseInt(arrTablesJson[2].x),
                }
          }
        >
          {arrTablesJson[2].name_table}
        </div>
        <div
          className="tables"
          style={
            tables === "Mesa4"
              ? {
                  backgroundColor: "#6B87BF",
                  color: "white",
                  top: parseInt(arrTablesJson[3].y),
                  left: parseInt(arrTablesJson[3].x),
                }
              : {
                  top: parseInt(arrTablesJson[3].y),
                  left: parseInt(arrTablesJson[3].x),
                }
          }
        >
          {arrTablesJson[3].name_table}
        </div>
      </div>
    </>
  );
};

export default Floor1;
