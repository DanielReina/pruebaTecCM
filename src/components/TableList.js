import React,{Fragment} from "react";
import styled from "styled-components";
import tablesArray from "../Tables";
import { makeStyles } from "@material-ui/core/styles";
import { Popover, Typography } from "@material-ui/core";


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



const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));


const TableList = ({ tables, setTable }) => {
    
     const classes = useStyles();
     const [anchorEl, setAnchorEl] = React.useState(null);

     const handleClick = (event) => {
       setAnchorEl(event.currentTarget);
     };

     const handleClose = () => {
       setAnchorEl(null);
     };

     const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    
  return (
    <UList>
      {tablesArray.map((object, index) => (
        <Fragment key={object.table}>
          <List
            id={object._id}
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={handleClick}
            key={index}
          >
            <p>{object.table}</p>
          </List>
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
            key={object._id}
          >
            <Typography className={classes.typography} key={object.title}>
              {object.title}
            </Typography>
          </Popover>
        </Fragment>
      ))}
    </UList>
  );
};

export default TableList;
















