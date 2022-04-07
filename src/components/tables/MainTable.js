import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const MainTable = () => {
    const cell = ["loan ID", "Borrower ID", "Loan Amount"]

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        {
                            cell.map((val, index)=>{
                                return(
                                index==0?<TableCell>{val}</TableCell>:
                                <TableCell align='right'>{val}</TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MainTable;