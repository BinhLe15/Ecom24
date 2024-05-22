import React from "react";
import '../../../App.css';
import '../../../styles/Team.css';
import { Card, Grid, Stack, Typography } from "@mui/material";
import CustomPieChart from "../../../components/charts/CustomPieChart";

function TeamStats() {


    return (
        <>
            <Typography className="position-label" fontStyle="bold" variant='h4'>Qualifying stats</Typography>

            <Card>
                <Grid container spacing={2}>

                    <Grid item xs={3}>
                        <CustomPieChart />
                    </Grid>

                    <Grid item xs={1}>

                    </Grid>

                    <Grid container item xs={8}>
                        <Grid item xs={3}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>12</Typography>
                                <Typography className="position-label" variant='subtitle2'>Goals</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={3}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>12</Typography>
                                <Typography className="position-label" variant='subtitle2'>Goals conceded</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={3}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>52%</Typography>
                                <Typography className="position-label" variant='subtitle2'>Possession (%)</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={3}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>82%</Typography>
                                <Typography className="position-label" variant='subtitle2'>Passing accuracy (%)</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={3}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>12</Typography>
                                <Typography className="position-label" variant='subtitle2'>Goals</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={3}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>12</Typography>
                                <Typography className="position-label" variant='subtitle2'>Goals conceded</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={3}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>52%</Typography>
                                <Typography className="position-label" variant='subtitle2'>Possession (%)</Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={3}>
                            <Stack spacing={0}>
                                <Typography className="position-label" fontStyle="bold" variant='h4'>82%</Typography>
                                <Typography className="position-label" variant='subtitle2'>Passing accuracy (%)</Typography>
                            </Stack>
                        </Grid>
                    </Grid>





                </Grid>

            </Card>

        </>
    )
}

export default TeamStats;