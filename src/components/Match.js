import React from 'react';
import './Match.css'

function Match({ match }) {
    // const countryCodes = ['al', 'ad', 'at', 'by', 'be', 'ba', 'bg', 'hr']
    return (
      <div className="card">
        <div className="card-body">
          <div className="date">{match.date}</div>
          <div className="match-detail">
            <span className="team">
                <img src={`flags/${match.team1Flag}.png`} width={50} alt=''/>
                {match.team1}
            </span>
            <span className="score">{match.score1} - {match.score2}</span>
            <span className="team">
                <img src={`flags/${match.team2Flag}.png`} width={50} alt=''/>
                {match.team2}
            </span>
          </div>
          <div className="location">{match.stage}</div>
        </div>
      </div>
    );
  }

export default Match;
