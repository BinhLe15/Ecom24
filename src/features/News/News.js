import axios from "axios";
import { useEffect, useState } from "react";
import CardItem from "../../components/Pages/CardItem";
import { Typography, Grid } from "@mui/material";

function News() {
    const [newsData, setNewsData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/readfromserver");
                const dataNews = response.data.data;
                setNewsData(dataNews);
                console.log(dataNews);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [])

    return (
        <div>
            <Typography variant="3" component="h2" m={5}>
                Check out these Football News!
            </Typography>

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