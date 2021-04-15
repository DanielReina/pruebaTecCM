import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tablesArray from "../Tables";
import { makeStyles } from "@material-ui/core/styles";
import { Popover, TextField } from "@material-ui/core";

const List = styled.li`
  margin: 5px 0px;
  margin-left: 8px;
  width: 250px;
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


const TableList = ({ tables, setTable, plan }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [tableName, setTableName] = useState(false);
  const [match, setMatch] = useState(false);
  const [filter, setFilter] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.target);
    setTable(event.target.innerText);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filterTable = () => {
    if (tableName) {
      const idMatch = `${tableName
        .toLowerCase()
        .charAt(0)
        .toUpperCase()}${tableName.slice(1)}`
      if (
        document.getElementById(idMatch.replace(/ /g, ""))
      ) {
        setMatch(true);
      } else {
        setMatch(false);
      }
    }
  };

  const tablesInfo = plan.tables
  let arrTablesJson = [];
  for (const property in tablesInfo) {
    arrTablesJson.push(tablesInfo[property])
  }

  useEffect(() => {
    filterTable();
  }, [tableName]);

  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <section id="section2">
      <form
        onSubmit={(e) => e.preventDefault()}
        onChange={filterTable}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => setTableName(e.target.value)}
          id="outlined-basic"
          label="Buscar mesa"
          variant="outlined"
        />
        <input
          id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </form>
      <UList>
        {true || (match && tableName.length !== 0) ? (
          <>
            {arrTablesJson
              .filter(
                (f) =>
                  f.name_table
                    .toLowerCase()
                    .includes(filter.toLowerCase().replace(/ /g, "")) ||
                  filter === ""
              )
              .map((object) => (
                <List
                  value={object.name_table}
                  key={object.id_table}
                  id={object.name_table}
                  aria-describedby={id}
                  variant="contained"
                  color="primary"
                  onClick={(e) => handleClick(e)}
                >
                  <p>{object.name_table}</p>
                </List>
              ))}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <div id="pop" className={classes.typography}>
                {tablesArray
                  .filter(
                    (object) =>
                      object.table.toLowerCase().replace(/ /g, "") ===
                      tables.toLowerCase().replace(/ /g, "")
                  )
                  .map((object) => (
                    <div key={object._id}>
                      <strong>{object.title}</strong>
                      <hr />
                      {object.information}
                    </div>
                  ))}
              </div>
            </Popover>
          </>
        ) : (
          <>
            {arrTablesJson.map((object) => (
              <List
                value={object.name_table}
                key={object.id_table}
                id={object.name_table}
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e)}
              >
                <p>{object.name_table}</p>
              </List>
            ))}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <div id="pop" className={classes.typography}>
                {tablesArray
                  .filter(
                    (object) =>
                      object.table.toLowerCase().replace(/ /g, "") ===
                      tables.toLowerCase().replace(/ /g, "")
                  )
                  .map((object) => (
                    <div key={object._id}>
                      <strong>{object.title}</strong>
                      <hr />
                      {object.information}
                    </div>
                  ))}
              </div>
            </Popover>
          </>
        )}
      </UList>
    </section>
  );
};

export default TableList;
