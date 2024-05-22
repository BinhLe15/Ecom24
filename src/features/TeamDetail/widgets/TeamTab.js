import React from 'react';
import '../../../App.css';
import '../../../styles/Team.css';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Typography, colors } from '@mui/material';
import TeamOverview from './TeamOverview';
import TeamMatches from './TeamMatches';
import TeamSquad from './TeamSquad';
import theme from '../../../theme/CustomTheme.js'
import TeamStats from './TeamStats';


function TeamTab({team_key ,players, team_badge}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{borderBottom: 1, background: '#143cdb', borderColor: 'divider' }}>
                <Tabs  value={value}
          onChange={handleChange}
          aria-label="team information tabs">
                    <Tab label="Overview" style={{ color: value === 0 ? theme.palette.tabColor.active : theme.palette.tabColor.default }}/>
                    <Tab label="Matches"{...a11yProps(1)} style={{ color: value === 1 ? theme.palette.tabColor.active : theme.palette.tabColor.default }}/>
                    <Tab label="Stats" {...a11yProps(2)} style={{ color: value === 2 ? theme.palette.tabColor.active : theme.palette.tabColor.default }}/>
                    <Tab label="Squad" {...a11yProps(3)} style={{ color: value === 3 ? theme.palette.tabColor.active : theme.palette.tabColor.default }}/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <TeamOverview/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TeamMatches team_key={team_key} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <TeamStats></TeamStats>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <TeamSquad players={players} team_badge={team_badge}></TeamSquad>
            </CustomTabPanel>
        </>
    )
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default TeamTab;