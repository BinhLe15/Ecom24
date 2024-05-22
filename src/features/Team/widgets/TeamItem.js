import React from 'react'
import '../../../App.css';
import '../../../styles/Team.css';
import { Tabs, Tab, Box, Typography, colors } from '@mui/material';
import { Link } from "react-router-dom"

function TeamItem ({ name, logoUrl, team_key }) {

    return (
        <div className="team-item">
            <Link to={`/teamdetail/${team_key}`} className="team-wrap" >
                <span>
                <img src={logoUrl} alt={`${name} Logo`} sizes='10'/>
                </span>
                <Typography variant="body1" className='team-name' align="center" mt={1}>{name}</Typography>
            </Link>
        </div>
    )
}

export default TeamItem
