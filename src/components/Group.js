// src/Group.js
import React from 'react';
import './Pages/GroupsPage.css';

const Group = ({ group }) => {
  return (
    <div className="group">
      <h2>{group.name}</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>For</th>
            <th>Against</th>
            <th>Goal difference</th>
            <th>Points</th>
            <th>Form guide</th>
          </tr>
        </thead>
        <tbody>
          {group.teams.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td style={{alignItems: 'center', display: 'flex'}}>
                <img src={`flags/${team.flag}.png`} width={50} alt=''/> {team.name}
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>
                <div className="form-guide">
                  <span className="form-circle"></span>
                  <span className="form-circle"></span>
                  <span className="form-circle"></span>
                  <span className="form-circle"></span>
                  <span className="form-circle"></span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="group-details">
        <a href="#group-details">Group details</a>
      </div>
    </div>
  );
};

export default Group;
