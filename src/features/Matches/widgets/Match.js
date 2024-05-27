import React from 'react';
import './Match.css'

function Match({ match }) {
    // const countryCodes = ['al', 'ad', 'at', 'by', 'be', 'ba', 'bg', 'hr']
    
    return (
      <div className="card">
        <div className="card-body">
          <div className="date">{match.match_date}</div>
          <div className="match-detail">
            <span className="team">
                <img src={`${match.team_away_badge}`} width={50} alt=''/>
                {match.team1}
            </span>
            <span className="score">{match.match_hometeam_score} - {match.match_awayteam_score}</span>
            <span className="team">
                <img src={`${match.team_home_badge}`} width={50} alt=''/>
                {match.team2}
            </span>
          </div>
          <div className="location">{match.league_name}</div>
        </div>
      </div>
    );
  }

export default Match;
