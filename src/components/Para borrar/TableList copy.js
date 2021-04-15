import React, {useState, useEffect} from "react";
import styled from "styled-components";
import tablesArray from "../../Tables";
import plan from "../../plano.json";
import { makeStyles } from "@material-ui/core/styles";
import { Popover, TextField } from "@material-ui/core";

const List = styled.li`
  margin: 5px 0px;
  margin-left:8px;
  width:250px;
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

const planArray=[plan]
const TableList = ({ tables, setTable }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [tableNumber, setTableNumber] = useState(false);
  const [match, setMatch] = useState(false);

  const handleClick = (event,object) => {
    setAnchorEl(event.target)
    setTable(event.target.innerText);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filterTable = () => {
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
    filterTable();
  }, [tableNumber]);

  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <section id='section2'>
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
        {match && tableNumber.length!==0 ? (
          <>
            {tablesArray
              .filter(
                (object) =>
                  object._id === tableNumber.toLowerCase().replace(/ /g, "")
              )
              .map((object) => (
                <List
                  value={object.table}
                  key={object._id}
                  id={object._id}
                  aria-describedby={id}
                  variant="contained"
                  color="primary"
                  onClick={(e) => handleClick(e, object)}
                >
                  <p value={object.table}>{object.table}</p>
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
                  .filter((object) => object.table === tables)
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
            {tablesArray.map((object) => (
              <List
                value={object.table}
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
                  .filter((object) => object.table === tables)
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
