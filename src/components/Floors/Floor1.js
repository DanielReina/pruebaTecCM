import React from "react";


const Floor1 = ({ tables, arrTablesJson }) => {
  
const blackBackground = {
  backgroundColor: "black",
  color: "white",
};
  console.log(arrTablesJson);
  return (
    <>
      <div id="p1">
        <div
          className="tables"
          style={
            ({
              top: parseInt(arrTablesJson[0].y),
              left: parseInt(arrTablesJson[0].x),
            })
          }
        >
          Mesa1
        </div>
        <div
          className="table2 tables"
          style={tables === "Mesa2" ? blackBackground : null}
        >
          Mesa2
        </div>
        <div
          className="table3 tables"
          style={tables === "Mesa3" ? blackBackground : null}
        >
          Mesa3
        </div>
        <div
          className="table4 tables"
          style={tables === "Mesa4" ? blackBackground : null}
        >
          Mesa4
        </div>
      </div>
    </>
  );
};

export default Floor1;
