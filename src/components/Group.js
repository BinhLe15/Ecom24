// src/Group.js
import '../styles/Group.css'
import React from 'react';
import './Pages/GroupsPage.css';
import { TableCell, TableContainer, TableBody, TableHead, Table, TableRow, Paper } from '@mui/material';

const Group = ({ group }) => {
  return (
    <div className="group">
      <h2>{group.name}</h2>
      <TableContainer>
        <Table className='table-group'>
          
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell align='center' /> 
              <TableCell align="center"></TableCell>
              <TableCell align="center">Played</TableCell>
              <TableCell align="center">Won</TableCell>
              <TableCell align="center">Drawn</TableCell>
              <TableCell align="center">Lost</TableCell>
              <TableCell align="center">For</TableCell>
              <TableCell align="center">Against</TableCell>
              <TableCell align="center">Goal difference</TableCell>
              <TableCell align="center">Points</TableCell>
              <TableCell align="center">Form guide</TableCell>
            </TableRow>
       
          <TableBody>
            {group.teams.map((team, index) => (
              <TableRow key={index}>
                <TableCell><img src={`flags/${team.flag}`} width={50} alt={team.name} /></TableCell>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'left' }}>
                     {team.name}
                  </div>
                </TableCell>
                <TableCell align='center'>0</TableCell>
                <TableCell align='center'>0</TableCell>
                <TableCell align='center'>0</TableCell>
                <TableCell align='center'>0</TableCell>
                <TableCell align='center'>0</TableCell>
                <TableCell align='center'>0</TableCell>
                <TableCell align='center'>0</TableCell>
                <TableCell align='center'>0</TableCell>
                <TableCell align='center'>
                  <div className="form-guide">
                    <span className="form-circle"></span>
                    <span className="form-circle"></span>
                    <span className="form-circle"></span>
                    <span className="form-circle"></span>
                    <span className="form-circle"></span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="group-details">
        <a href="#group-details">Group details</a>
      </div>
    </div>
  );
};

export default Group;
