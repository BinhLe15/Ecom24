import React from 'react';
import '../../../App.css';
import '../../../styles/Team.css';
import { Typography, Stack, Divide, Card, CardContent, Grid } from '@mui/material';


function TeamMatchItem({match_date, league_name, team_home_badge, team_away_badge, match_hometeam_name, match_awayteam_name, match_hometeam_score, match_awayteam_score}) {
    return (
        <>
            <div className="team-matches">
                <Stack >
                    <Typography variant="h6" className='time-match'  align="left" >{match_date}</Typography>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent align='center' >
                           
                            <Typography variant="subtitle1" className='match-group'>{league_name}</Typography>
                            <Stack direction="row" spacing={2} justifyContent={'center'}>
                            <Typography variant="h5" >{match_hometeam_name}</Typography>

                            <img src={team_home_badge}  className='team-icon'/>

                                <Typography variant="h4" >{match_hometeam_score} - {match_awayteam_score}</Typography>
                                <img src={team_away_badge}  className='team-icon'/>
                                <Typography variant="h5" >{match_awayteam_name}</Typography>

                            </Stack >
                            

                        </CardContent>
                        
                    </Card>
                </Stack>
            </div>
        </>
    )
}

export default TeamMatchItem;