import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(position) {
    return { position };
}

export default function BasicTable(btcTrades) {

  const rows = [
    //   btcTrades.map(btcTrade => (
    //       createData(btcTrade.position)
    //   ))
    console.log(btcTrades),
    createData('Frozen yogurt')
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Position</TableCell>
            <TableCell align="right">entry date</TableCell>
            <TableCell align="right">close date</TableCell>
            <TableCell align="right">entry price</TableCell>
            <TableCell align="right">close price</TableCell>
            <TableCell align="right">profit ($)</TableCell>
            <TableCell align="right">profit (%)</TableCell>
            <TableCell align="right">run up ($)</TableCell>
            <TableCell align="right">run up (%)</TableCell>
            <TableCell align="right">draw down ($)</TableCell>
            <TableCell align="right">draw down (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.position}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.position}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}