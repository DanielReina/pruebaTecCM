import React from "react";

const Floor2 = ({ tables, arrTablesJson }) => {
  return (
    <>
      <div id="p2">
        <div
          className="tables"
          style={
            tables === "Mesa5"
              ? {
                  backgroundColor: "black",
                  color: "white",
                  top: parseInt(arrTablesJson[4].y),
                  left: parseInt(arrTablesJson[4].x),
                }
              : {
                  top: parseInt(arrTablesJson[4].y),
                  left: parseInt(arrTablesJson[4].x),
                }
          }
        >
          {arrTablesJson[4].name_table}
        </div>
        <div
          className="table6 tables"
          style={
            tables === "Mesa6"
              ? {
                  backgroundColor: "black",
                  color: "white",
                  top: parseInt(arrTablesJson[5].y),
                  left: parseInt(arrTablesJson[5].x),
                }
              : {
                  top: parseInt(arrTablesJson[5].y),
                  left: parseInt(arrTablesJson[5].x),
                }
          }
        >
          {arrTablesJson[5].name_table}
        </div>
      </div>
    </>
  );
};

export default Floor2;
