import React from "react";

const Floor3 = ({ tables, arrTablesJson }) => {
  return (
    <>
      <div id="p3">
        <div
          className="tables"
          style={
            tables === "Mesa7"
              ? {
                  backgroundColor: "#6B87BF",
                  color: "white",
                  top: parseInt(arrTablesJson[6].y),
                  left: parseInt(arrTablesJson[6].x),
                }
              : {
                  top: parseInt(arrTablesJson[6].y),
                  left: parseInt(arrTablesJson[6].x),
                }
          }
        >
          {arrTablesJson[6].name_table}
        </div>
        <div
          className="tables"
          style={
            tables === "Mesa8"
              ? {
                  backgroundColor: "#6B87BF",
                  color: "white",
                  top: parseInt(arrTablesJson[7].y),
                  left: parseInt(arrTablesJson[7].x),
                }
              : {
                  top: parseInt(arrTablesJson[7].y),
                  left: parseInt(arrTablesJson[7].x),
                }
          }
        >
          {arrTablesJson[7].name_table}
        </div>
      </div>
    </>
  );
};

export default Floor3;
