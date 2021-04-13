import React from "react";
import styled from "styled-components";
import tablesArray from "../../Tables";
import { OverlayTrigger, Popover } from "react-bootstrap";

const List = styled.li`
  margin: 5px 0px;
  height: 40px;
  list-style: none;
  border: 1px solid black;
  text-align: center;
  line-height: 40px;

&:hover{
    background-color:red;
}
`;

const UList = styled.ul`
margin-top:50px;
`



const TableList = ({tables, setTable}) => {
  return (
    <UList>
      {tablesArray.map((object) => (
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id="popover-positioned-bottom">
              <Popover.Title as="h3">{object.title}</Popover.Title>
              <Popover.Content>{object.information}</Popover.Content>
            </Popover>
          }
        >
          <List id={object.id}>
            <p>{object.table}</p>
          </List>
        </OverlayTrigger>
      ))}
    </UList>
  );
};

export default TableList;
