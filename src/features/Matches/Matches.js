import React from 'react';
import Match from './widgets/Match';
import './Matches.css'
import { useState, useEffect } from 'react';
import EventsApi from '../../api/EventsApi';
import ClipLoader from 'react-spinners/ClipLoader';

function Matches() {

  const [matchesData, setMatchesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

      const getMatchData = async () => {
          try {
              const response = await EventsApi.getAll();

              if (response) {
                  setMatchesData(response);
                  console.log(response)
              } else {
                  console.warn('Not matches founded');
              }

              setIsLoading(false);

          } catch (error) {
              console.log('Failed to fetch matches data: ', error);
          }

      }

     


      getMatchData();

  }, []);

  const matches = [
    { date: "Monday 21 November 2022", team1: "England", team1Flag: "uk", team2: "Iran", team2Flag: "al", score1: 6, score2: 2, stage: "First stage - Group B" },
    { date: "Monday 21 November 2022", team1: "Senegal", team1Flag: "uk", team2: "Netherlands", team2Flag: "uk", score1: 0, score2: 2, stage: "First stage - Group A" },
    { date: "Tuesday 22 November 2022", team1: "United States", team1Flag: "uk", team2: "Wales", team2Flag: "al", score1: 1, score2: 1, stage: "First stage - Group B" },
    { date: "Tuesday 22 November 2022", team1: "Argentina", team1Flag: "uk", team2: "Saudi Arabia", team2Flag: "al", score1: 1, score2: 2, stage: "First stage - Group C" },
    { date: "Tuesday 22 November 2022", team1: "Denmark", team1Flag: "uk", team2: "Tunisia", team2Flag: "al", score1: 0, score2: 0, stage: "First stage - Group D" },
    { date: "Tuesday 22 November 2022", team1: "Mexico", team1Flag: "uk", team2: "Poland", team2Flag: "al", score1: 0, score2: 0, stage: "First stage - Group C" },
    { date: "Wednesday 23 November 2022", team1: "France", team1Flag: "uk", team2: "Australia", team2Flag: "al", score1: 4, score2: 1, stage: "First stage - Group D" }
    // Thêm các trận đấu khác theo cấu trúc này
  ];

  console.log(matchesData)

  // Nhóm các trận đấu theo ngày
  const groupedMatches = matchesData.reduce((group, match) => {
    const date = match.match_date;
    if (!group[date]) {
      group[date] = [];
    }
    group[date].push(match);
    return group;
  }, {});

  return (
<>

    {isLoading ? (
      <div className='loader-container'>
          <ClipLoader />
      </div>

  ) : (
    <div className="container mt-4">
    {Object.entries(groupedMatches).map(([match_date, matches], index) => (
      <div key={index}>
        <h2 className="date-header">{match_date}</h2> {/* Tiêu đề ngày */}
        {matches.map((match, index) => (
          <Match key={index} match={match} />
        ))}
      </div>
    ))}
  </div>
  )}
   
    </>
    
  );
}

export default Matches;