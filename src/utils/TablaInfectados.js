import React from 'react';
import {useEffect, useState} from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import axios from 'axios';



const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);


const useStyles = makeStyles({
 
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:'50px',
    maxWidth: '80%',
    padding: '10px',
  },

  table: {
    margin: '10px',
    minWidth: 700,
    maxWidth: '80%',
  },
});

const columns = [
    { title: 'name', label: 'Nombre'},
    { title: 'lastname', label: 'Apellido'},
    { title: 'age', label: 'Edad' },
    { title: 'genre', label: 'Género'},
    { title: 'country', label: 'País'},
  ];
  
  const createData = (name, lastname, age, genre, country, live) => {
    return { name, lastname, age, genre, country, live };
  }

export default function TableInfectados() {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  useEffect(() => {

    const url_data = `https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected`

    axios.get(url_data)
      .then(response => {
        let newRows = response.data.map(result => {
          let generoString = JSON.stringify(result.female);
          generoString === "true"
            ? generoString = "Femenino"
            : generoString = "Masculino"

          return (
            createData(result.first_name, result.last_name, result.age, generoString, result.country, result.live, result.id)
          )
        });
        setRows(newRows)
      })
  }, []);


  return (
    <TableContainer className={classes.tableContainer} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow >
              {columns.map((column)=>
              <StyledTableCell  title={column.title}> {column.label}</StyledTableCell>
              )}
            
          </TableRow>
        </TableHead>
        <TableBody>
          
          {rows.map((row) => (
            <StyledTableRow key={row.id} style={{ color: !row.live ? 'black' : 'red' }}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.lastname}</StyledTableCell>
              <StyledTableCell align="left">{row.age}</StyledTableCell>
              <StyledTableCell align="left">{row.genre}</StyledTableCell>
              <StyledTableCell align="left">{row.country}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
