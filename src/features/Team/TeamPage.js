import '../../App.css';
import '../../styles/Team.css';
import Footer from '../../components/Footer.js';
import TeamItem from './widgets/TeamItem.js';
import { Tabs, Tab, Box, Typography, colors } from '@mui/material';
import { useEffect, useState } from 'react';
import TeamsApi from '../../api/teamsApi.js';
import ClipLoader from "react-spinners/ClipLoader";

function TeamsPage() {
    const [teamList, setTeamList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTeamList = async () => {
            try {
                // const params = {_page: 1, _limit: 20};
                const response = await TeamsApi.getAll();
                console.log('Fetch teams successfully: ', response);

                setTeamList(response);
                setIsLoading(false);

            } catch (error) {
                console.log('Failed to fetch team list: '.error);
            }

        }


        fetchTeamList();
    }, []);

    return (
        <>
            <div className="content" >
                <div className="team-overview">
                    <div className="pk-col pk-col--span-00-4 pk-col--span-ss-4 pk-col--span-xs-4 pk-col--span-sm-8 pk-col--span-md-12 pk-col--span-lg-12"  >
                        <header>Teams</header>
                        <div>
                            <div className="team-overview-group">
                                <Typography variant="h4" className='team-name' align="left" mt={1}>Group stage</Typography>

                              

                                    {isLoading ? (
                                     <div className='loader-container'>
                                          <ClipLoader/> 
                                     </div>
   
                                    ) : (
                                        teamList.length > 0 && (
                                            <div className="teams-overview-team-wrapper">
                                                {teamList.map((team) => (
                                                    <TeamItem key={team.team_key} name={team.team_name} logoUrl={team.team_badge} team_key={team.team_key} />
                                                ))}
                                            </div>
                                        )
                                    )}
                                


                            </div>


                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default TeamsPage;