import React from "react";
const blackBackground = {
  backgroundColor: "black",
  color: "white",
};

const Floor1 = ({ tables }) => {
  return (
    <>
      <div id="p1">
        <div
          className="table1 tables"
          style={tables === "Mesa 1" ? blackBackground : null}
        >
          Mesa1
        </div>
        <div
          className="table2 tables"
          style={tables === "Mesa 2" ? blackBackground : null}
        >
          Mesa2
        </div>
        <div
          className="table3 tables"
          style={tables === "Mesa 3" ? blackBackground : null}
        >
          Mesa3
        </div>
        <div
          className="table4 tables"
          style={tables === "Mesa 4" ? blackBackground : null}
        >
          Mesa4
        </div>
      </div>
    </>
  );
};

export default Floor1;
