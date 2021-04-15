import React from "react";
const blackBackground = {
  backgroundColor: "black",
  color: "white",
};

const Floor2 = ({ tables }) => {
  return (
    <>
      <div id="p2">
        <div
          className="table5 tables"
          style={tables === "Mesa5" ? blackBackground : null}
        >
          Mesa5
        </div>
        <div
          className="table6 tables"
          style={tables === "Mesa6" ? blackBackground : null}
        >
          Mesa6
        </div>
      </div>
    </>
  );
};

export default Floor2;
