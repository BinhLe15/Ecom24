import React from 'react';
import '../../App.css';
import '../../styles/Team.css';
import Footer from '../../components/Footer.js';
import TeamHeader from './widgets/TeamHeader.js';
import TeamTab from './widgets/TeamTab.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TeamsApi from '../../api/teamsApi.js';

function TeamDetailPage() {
    const params = useParams();
    const team_key = params.team_key;
    
    const [teamKey, setTeamKey] = useState(params.team_key);
    const [teamData, setTeamData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        
        const fetchTeamData = async () => {
            try {
                const response = await TeamsApi.getAll();

                const filteredTeamData = response.find(team => team.team_key === team_key);
                if (filteredTeamData) {
                  setTeamData(filteredTeamData);
                } else {
                  console.warn('Team not found with key:', team_key);
                }

                setIsLoading(false);
                    
            } catch (error) {
                console.log('Failed to fetch team data: ', error);
            }

        }


        fetchTeamData();
    }, []);

    return (
        <>
            <TeamHeader team_name={teamData["team_name"]} team_badge={teamData["team_badge"]}></TeamHeader>
            <TeamTab team_key={team_key} players={teamData["players"]} team_badge={teamData["team_badge"]}></TeamTab>
            <Footer />
        </>
    )
}

export default TeamDetailPage;