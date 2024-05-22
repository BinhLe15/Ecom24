import React from 'react';
import Card from '../../../components/Card';
import { Tabs, Tab, Box, Typography, colors, Stack, Divider } from '@mui/material';
import '../../../App.css';
import '../../../styles/Team.css';
import TeamMatchItem from './TeamMatcheItem';
import EventsApi from '../../../api/EventsApi';
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";


function TeamMatches({ team_key }) {
    const [matchesData, setMatchesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const getMatchData = async () => {
            try {
                const response = await EventsApi.getAll();

                const filteredMatchesData = response.filter(team => team.match_hometeam_id === team_key);
                if (filteredMatchesData) {
                    setMatchesData(filteredMatchesData);
                } else {
                    console.warn('Team not found with key:', team_key);
                }

                setIsLoading(false);

            } catch (error) {
                console.log('Failed to fetch team data: ', error);
            }

        }


        getMatchData();

    }, []);

    return (
        <>
            <div className="team-matches">

                <Typography variant="h3" className='team-name' align="left" >Matches</Typography>
                <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
                    {isLoading ? (
                        <div className='loader-container'>
                            <ClipLoader />
                        </div>
                    ) : matchesData.length > 0 && (
                        <>
                            {matchesData.map((match) => (

                                <TeamMatchItem
                                    match_date={match.match_date}
                                    league_name={match.league_name}
                                    match_hometeam_name={match.match_hometeam_name}
                                    team_home_badge={match.team_home_badge}
                                    match_hometeam_score={match.match_hometeam_score}
                                    match_awayteam_name={match.match_awayteam_name}
                                    team_away_badge={match.team_away_badge}
                                    match_awayteam_score={match.match_awayteam_score}
                                />
                            ))}
                        </>
                    )
                    }

                </Stack>
            </div>
        </>
    )
}

export default TeamMatches;