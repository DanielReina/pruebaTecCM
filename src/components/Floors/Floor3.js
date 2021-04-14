import React from "react";
const blackBackground = {
  backgroundColor: "black",
  color: "white",
};

const Floor3 = ({tables}) => {
  return (
    <>
      <div id="p3">
        <div
          className="table7 tables"
          style={tables === "Mesa 7" ? blackBackground : null}
        >
          Mesa7
        </div>
        <div
          className="table8 tables"
          style={tables === "Mesa 8" ? blackBackground : null}
        >
          Mesa8
        </div>
      </div>
    </>
  );
};

export default Floor3;
