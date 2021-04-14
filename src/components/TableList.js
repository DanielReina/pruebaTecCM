import React, { Fragment, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import tablesArray from "../Tables";
import { makeStyles } from "@material-ui/core/styles";
import { Popover, Typography, TextField } from "@material-ui/core";

const List = styled.li`
  margin: 5px 0px;
  height: 40px;
  list-style: none;
  border: 1px solid black;
  text-align: center;
  line-height: 40px;

  &:hover {
    background-color: red;
  }
`;

const UList = styled.ul`
  margin-top: 50px;
`;

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const TableList = ({ tables, setTable }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [tableNumber, setTableNumber] = useState(false);
  const [match, setMatch] = useState(false);
  const handleClick = (event, object) => {
    setAnchorEl(event.target);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const filterTable = () => {
    console.log("filter activado", match);
    if (tableNumber) {
      if (
        document.getElementById(tableNumber.toLowerCase().replace(/ /g, ""))
      ) {
        setMatch(true);
      } else {
        setMatch(false);
      }
    }
  };
  useEffect(() => {
    console.log(
      "useEffect",
      tablesArray.filter((object) => object._id === tableNumber)
    );
    filterTable();
  }, [tableNumber]);

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        onChange={filterTable}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => setTableNumber(e.target.value)}
          id="outlined-basic"
          label="Buscar mesa"
          variant="outlined"
        />
      </form>
      <UList>
        {match ? (
          <>
            {tablesArray
              .filter(
                (object) =>
                  object._id === tableNumber.toLowerCase().replace(/ /g, "")
              )
              .map((object) => (
                <List
                  key={object._id}
                  id={object._id}
                  aria-describedby={id}
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  <p>{object.table}</p>
                </List>
              ))}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography id="pop" className={classes.typography}>
                <strong>Lorem ipsum, dolor sit amet</strong>
                <br />
                Consectetur adipisicing elit.
              </Typography>
            </Popover>
          </>
        ) : (
          <>
            {tablesArray.map((object) => (
              <List
                key={object._id}
                id={object._id}
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e, object)}
              >
                <p>{object.table}</p>
              </List>
            ))}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography id="pop" className={classes.typography}>
                <strong>Lorem ipsum, dolor sit amet</strong>
                <br />
                Consectetur adipisicing elit.
              </Typography>
            </Popover>
          </>
        )}
      </UList>
    </>
  );
};

export default TableList;
