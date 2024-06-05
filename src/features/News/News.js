import axios from "axios";
import { useEffect, useState } from "react";
import CardItem from "../../components/Pages/CardItem";
import { Typography, Grid, Button } from "@mui/material";

function News() {
    const [newsData, setNewsData] = useState();
    const [userRole, setUserRole] = useState();;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/readfromserver");
                const dataNews = response.data.data;
                setNewsData(dataNews);

            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };

        const fetchRole = async () => {
            try {
                const role = localStorage.getItem('role')
                setUserRole(role);
                console.log(role)
            } catch (error) {
                console.log("Error fetching role: ", error);
            }
        };

        fetchRole();

        fetchData();
    }, [])

    return (
        <div>

            
            <Grid container spacing={2}>
                <Grid item xs={8}>
                <Typography variant="3" component="h2" m={5}>
                Check out these Football News!
            </Typography>

                </Grid>
                <Grid item justify="center" alignItems="center" container xs={4}>
                    {userRole == "admin" && (
                        <Button href="/addnews" >Add News</Button>
                    )}
                </Grid>
            </Grid>

            {newsData ? (
                <Grid container spacing={2}>
                    {newsData.map((data, index) => (
                        <Grid item xs={3}>
                            <CardItem
                                src={require(`../../uploads/${data.image}`)}
                                text={data.title}
                                label="News"
                                path={`/newsdetail/${data._id}`}
                            />
                        </Grid>
                    ))}

                </Grid>


            ) : (
                <p>Loading News...</p> // Display loading message while data is fetched
            )}
        </div>
    );
}

export default News;