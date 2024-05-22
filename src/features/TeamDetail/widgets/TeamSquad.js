import React from 'react';
import '../../../App.css';
import '../../../styles/Team.css';
import { Tabs, Tab, Box, Typography, colors } from '@mui/material';
import PlayerBadge from './PlayerBadge';
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function TeamSquad({ players, team_badge }) {
    const [goalkeepers, setGoalKeepers] = useState([]);
    const [midfielders, setMidfielders] = useState([]);
    const [forwards, setForwards] = useState([]);
    const [defenders, setDefenders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {


        const getPlayersData = async () => {
            try {

                const filteredGoalkeepers = players.filter(player => player.player_type === "Goalkeepers");
                const filteredDefenders = players.filter(player => player.player_type === "Defenders");
                const filteredFowards = players.filter(player => player.player_type === "Forwards");
                const filteredMidfielders = players.filter(player => player.player_type === "Midfielders");

                setGoalKeepers(filteredGoalkeepers);
                setDefenders(filteredDefenders);
                setForwards(filteredFowards);
                setMidfielders(filteredMidfielders);

                console.log(midfielders);

                setIsLoading(false);

            } catch (error) {
                console.log('Failed to fetch team data: ', error);
            }

        }


        getPlayersData();
    }, []);

    return (
        <>
            <div>   {isLoading ? (
                <div className='loader-container'>
                    <ClipLoader />
                </div>

            ) : (
                <>
                    <div className="team-overview-group">
                        <Typography className="position-label" marginTop={5} marginBottom={2} variant='h4'>Goal Keepers</Typography>

                        <div className="player-badge-wrapper">


                            {goalkeepers.length > 0 && (
                                <>
                                    {goalkeepers.map((player) => (

                                        <PlayerBadge flagUrl={team_badge}
                                            playerImageUrl={player["player_image"]}
                                            firstName={player["player_name"]}
                                            surName='Thibaut'
                                            position={player["player_type"]}
                                        ></PlayerBadge>
                                    ))}
                                </>
                            )
                            }

                        </div>


                    </div>

                    <div className="team-overview-group">
                        <Typography className="position-label" marginTop={5} marginBottom={2} variant='h4'>Midfielders</Typography>

                        <div className="player-badge-wrapper">


                            {midfielders.length > 0 && (
                                <>
                                    {midfielders.map((player) => (

                                        <PlayerBadge flagUrl={team_badge}
                                            playerImageUrl={player["player_image"]}
                                            firstName={player["player_name"]}
                                            surName='Thibaut'
                                            position={player["player_type"]}
                                        ></PlayerBadge>
                                    ))}
                                </>
                            )
                            }

                        </div>


                    </div>

                    <div className="team-overview-group">
                        <Typography className="position-label" marginTop={5} marginBottom={2} variant='h4'>Forwards</Typography>

                        <div className="player-badge-wrapper">


                            {forwards.length > 0 && (
                                <>
                                    {forwards.map((player) => (

                                        <PlayerBadge flagUrl={team_badge}
                                            playerImageUrl={player["player_image"]}
                                            firstName={player["player_name"]}
                                            surName='Thibaut'
                                            position={player["player_type"]}
                                        ></PlayerBadge>
                                    ))}
                                </>
                            )
                            }

                        </div>
                    </div>
                </>
            )}






            </div>

        </>
    )
}

export default TeamSquad;