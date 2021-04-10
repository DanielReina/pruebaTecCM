import React, { useState } from "react";
import Floor1 from './Floors/Floor1'
import Floor2 from "./Floors/Floor2";
import Floor3 from "./Floors/Floor3";

const TableMap = () => {
  const [floor, setFloor] = useState(1);
    const changeFloor = () => {
        if (floor === 1) {
          setFloor(2);
        } else if (floor === 2) {
          setFloor(3);
        } else if (floor === 3) {
          setFloor(1);
        }
    
}
  let component
  if (floor === 1) {
    component = <Floor1 />;
  } else if (floor === 2) {
    component = <Floor2 />;
  } else if (floor === 3) {
    component = <Floor3 />;
  }

    return (
        <>
        <section id='section1'>
            {component}
      
        </section>
            <button onClick={changeFloor} />
            </>
    );
};

export default TableMap;
