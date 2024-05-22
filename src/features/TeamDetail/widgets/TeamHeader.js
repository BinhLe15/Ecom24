import React from 'react';
import '../../../App.css';
import '../../../styles/Team.css';
import { Avatar, Grid, Typography, Link, Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import { green, orange } from '@mui/material/colors';
import { BackButton } from '../../../components/buttons/BackButton';



function TeamsPage({team_name ,team_badge}) {
    return (
        <>
            <Stack className='team-header'>
                <Grid className='team-header-content' container spacing={2}>
                    <Grid item xs={2}>
                        <BackButton/>
                    </Grid>
                    <Grid item xs={10}>

                    </Grid>
                    <Grid item xs={4}>
                        <Avatar src={team_badge} sx={{ width: 196, height: 196 }}></Avatar>
                    </Grid>
                    <Grid item xs={8}>

                        <Typography variant="h2" className='team-name' align="left" mt={8} color={'white'}>{team_name}</Typography>


                    </Grid>

                </Grid>

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Divider className='divider' color='white' mt={30}></Divider>
                    </Grid>

                    <Grid item xs={2}>
                        <Link href="#" color="inherit" variant="body2" underline="none">Form Guide</Link>
                    </Grid>

                    <Grid item xs={12}>
                        <Stack direction="row" spacing={2}>
                            <Avatar sx={{ bgcolor: green[500], width: 24, height: 24 }}><Typography variant="subtitle2" color={'white'}>W</Typography></Avatar>
                            <Avatar sx={{ bgcolor: green[500] , width: 24, height: 24  }}><Typography variant="subtitle2" color={'white'}>W</Typography></Avatar>
                            <Avatar sx={{ bgcolor: orange[800] , width: 24, height: 24  }}><Typography variant="subtitle2" color={'white'}>L</Typography></Avatar>
                        </Stack>

                    </Grid>

                </Grid>



            </Stack>

        </>
    )
}

export default TeamsPage;