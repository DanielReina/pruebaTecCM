import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const DropDown = ({
  tables,
  setTable,
  setTableState,
  setFloorState
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();
  let open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (event) => {
    setTable(event.target.value);
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setTableState(true)
    setFloorState(false)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <FormControl
        className={classes.formControl}
        disabled={anchorEl !== null && true}
      >
        <InputLabel id="demo-simple-select-label">Mesas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tables}
          onChange={handleChange}
        >
          {[
            "Mesa 1",
            "Mesa 2",
            "Mesa 3",
            "Mesa 4",
            "Mesa 5",
            "Mesa 6",
            "Mesa 7",
            "Mesa 8",
          ].map((table) => (
            <MenuItem value={table} key={table}>
              <p
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                {table}
              </p>
              <Popover
                className="pop"
                key={table}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 200, left: 200 }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography key={table} className={classes.typography}>
                  {table}:lorem ipsum
                </Typography>
              </Popover>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
