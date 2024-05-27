import React from "react";
import '../../../App.css';
import '../../../styles/Team.css';
import { Card, Grid, Stack, Typography } from "@mui/material";
import CustomPieChart from "../../../components/charts/CustomPieChart";
import { useState, useEffect } from "react";
import EventsApi from "../../../api/EventsApi"

function TeamStats({team_key}) {

    const [matchesData, setMatchesData] = useState([]);
    const [statistics, setStatistics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const [shotsTotal, setShotsTotal] = useState(0);
    const [shotsOnGoal, setShotsOnGoal] = useState(0);
    const [shotsOffGoal, setShotsOffGoal] = useState(0);
    const [shotsBlocked, setShotsBlocked] = useState(0);
    const [shotsInsideBox, setShotsInsideBox] = useState(0);
    const [shotsOutsideBox, setShotsOutsideBox] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [corners, setCorners] = useState(0);
    const [offsides, setOffsides] = useState(0);
    const [ballPossession, setBallPossession] = useState(0);
    const [yellowCards, setYellowCards] = useState(0)
    const [saves, setSaves] = useState(0);
    const [passesTotal, setPassesTotal] = useState(0);
    const [passesAccurate, setPassesAccurate] = useState(0);


    useEffect(() => {

        const getMatchData = async () => {
            try {
                const response = await EventsApi.getAll();

                const filteredMatchesData = response.filter(match => match.match_hometeam_id === team_key);

                let shotsTotal = 0;
                let shotsOnGoal = 0;
                let shotsOffGoal = 0;
                let shotsBlocked = 0;
                let shotsInsideBox = 0;
                let shotsOutsideBox = 0;
                let fouls = 0;
                let corners = 0;
                let offsides = 0;
                let ballPossession = 0;
                let yellowCards = 0;
                let saves = 0;
                let passesTotal = 0;
                let passesAccurate = 0;

                filteredMatchesData.forEach(match => {
                    let stats = match.statistics;
                    
                    shotsTotal += parseInt(stats.find(stat => stat.type === "Shots Total").home)  || 0;
                    shotsOnGoal  += parseInt(stats.find(stat => stat.type === "Shots On Goal").home) || 0;
                    shotsOffGoal  += parseInt(stats.find(stat => stat.type === "Shots Off Goal").home) || 0;
                    shotsBlocked += parseInt(stats.find(stat => stat.type === "Shots Blocked").home) || 0;
                    shotsInsideBox += parseInt(stats.find(stat => stat.type === "Shots Inside Box").home) || 0;
                    shotsOutsideBox += parseInt(stats.find(stat => stat.type === "Shots Outside Box").home) || 0;
                    fouls += parseInt(stats.find(stat => stat.type === "Fouls").home) || 0;
                    corners += parseInt(stats.find(stat => stat.type === "Corners").home) || 0;
                    offsides += parseInt(stats.find(stat => stat.type === "Offsides").home) || 0;

                    ballPossession = (ballPossession + parseFloat(stats.find(stat => stat.type === "Ball Possession").home.slice(0, -1))) / 2 || 0;

                    yellowCards += parseInt(stats.find(stat => stat.type === "Yellow Cards").home) || 0;
                    saves += parseInt(stats.find(stat => stat.type === "Saves").home) || 0;
                    passesTotal = passesTotal + parseInt(stats.find(stat => stat.type === "Passes Total").home)|| 0;
                    passesAccurate = passesAccurate + parseInt(stats.find(stat => stat.type === "Passes Accurate").home)|| 0;
                


                    setShotsOnGoal(shotsOnGoal);
                    setShotsTotal(shotsTotal);
                    setShotsOffGoal(shotsOffGoal);
                    setShotsBlocked(shotsBlocked);
                    setShotsInsideBox(shotsInsideBox);
                    setShotsOutsideBox(shotsOutsideBox);
                    setFouls(fouls);
                    setCorners(corners);
                    setOffsides(offsides);
                    setBallPossession(ballPossession.toFixed(2));
                    setYellowCards(yellowCards);
                    setSaves(saves);
                    setPassesTotal(passesTotal);
                    setPassesAccurate(passesAccurate);

                });

                setIsLoading(false);

            } catch (error) {
                console.log('Failed to fetch team data: ', error);
            }

        }


        getMatchData();

    }, []);
    

    return (
        <>
            <Typography className="position-label" fontStyle="bold" variant='h4'>Qualifying stats</Typography>

            <Card className="team-stats-card">
                <Grid container spacing={5} padding={2}>

                    <Grid item xs={12}>
                    <Typography className="position-label" fontStyle="bold" variant='h5'>Ball Control</Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <CustomPieChart labels={["Ball Possession", "Ball Loss"]} value={[ballPossession, 100-ballPossession]} colors={['#205BC8', '#C61D23']}/>
                    </Grid>

                    <Grid item xs={1}>

                    </Grid>

                    <Grid container item xs={8}>
                        <Grid item xs={4}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{ballPossession}%</Typography>
                                <Typography className="position-label" variant='subtitle2'>Ball Possession (%)</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={4}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{passesTotal}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Pass Total</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={4}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{passesAccurate}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Pass Accurate</Typography>
                            </Stack>
                        </Grid>
                      

                    </Grid>

                </Grid>

            </Card>

            <Card className="team-stats-card">
                <Grid container spacing={5} padding={2}>

                    <Grid item xs={12}>
                    <Typography className="position-label" fontStyle="bold" variant='h5'>Fouls</Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <CustomPieChart labels={["Corners", "Offsides", "Others"]} value={[corners, offsides, fouls - corners - offsides]} colors={['#FFCD44', '#1D2730', '#90EE90']}/>
                    </Grid>

                    <Grid item xs={1}>

                    </Grid>

                    <Grid container item xs={8}>
                        <Grid item xs={6}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{fouls}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Total Fouls</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={6}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{corners}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Corners</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={6}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{offsides}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Offsides</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={6}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{yellowCards}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Yelow Cards</Typography>
                            </Stack>
                        </Grid>

                      

                    </Grid>

                </Grid>

            </Card>

            <Card>
                <Grid container spacing={5} padding={2}>

                    <Grid item xs={12}>
                    <Typography className="position-label" fontStyle="bold" variant='h5'>Atack</Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <CustomPieChart labels={["Goals", "Off Goals", "Blocked"]} value={[shotsOnGoal, shotsOffGoal, shotsBlocked]} colors={ [ '#205BC8', '#C61D23', '#FFCD44']}/>
                    </Grid>

                    <Grid item xs={1}>

                    </Grid>

                    <Grid container item xs={8}>
                        <Grid item xs={4}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{shotsTotal}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Total Shots</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={4}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{shotsOnGoal}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Goals</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={4}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{shotsOffGoal}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Shots Off Goal</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={4}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{shotsBlocked}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Shots Blocked</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={4}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{shotsInsideBox}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Shots Inside Box</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={4}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{shotsOutsideBox}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Shots Outside Box</Typography>
                            </Stack>
                        </Grid>

                    </Grid>

                </Grid>

            </Card>
{/* 
            <Card className="team-stats-card">
                <Grid container spacing={5} padding={2}>

                    <Grid item xs={12}>
                    <Typography className="position-label" fontStyle="bold" variant='h5'>Defend</Typography>
                    </Grid>

                    <Grid container item xs={8}>
                        <Grid item xs={12}>
                            <Stack spacing={0} alignItems="center">
                                <Typography className="position-label" fontStyle="bold" variant='h4'>{saves}</Typography>
                                <Typography className="position-label" variant='subtitle2'>Saves</Typography>
                            </Stack>
                        </Grid>

                    </Grid>

                </Grid>

            </Card> */}

        </>
    )
}

export default TeamStats;