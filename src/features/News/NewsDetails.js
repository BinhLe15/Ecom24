import axios from "axios";
import { useEffect, useState } from "react";
import CardItem from "../../components/Pages/CardItem";
import { Typography, Grid, Stack, Card, CardMedia } from "@mui/material";
import { useParams } from 'react-router-dom';

function NewsDetail() {
    const params = useParams();
    const id = params.newsid;
    
    const [newsDetail, setNewsDetail] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/readfromserver");
                const dataNews = response.data.data.find(item => item._id === id);
                setNewsDetail(dataNews);
                console.log(dataNews);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [])

    return (
        <div>
            {newsDetail ? (
                <Stack spacing={2} ml={20} mr={20}>
                     <Typography variant="h3" fontWeight={400} m={5}>
                        {newsDetail.title}
                    </Typography>

                    <Typography variant="subtitle1" fontWeight={200} color={"grey"} m={5}>
                        {newsDetail.title}
                    </Typography>

                    <Card>
                        <CardMedia component="img"
                        height={500}
                            image={require(`../../uploads/${newsDetail.image}`)}/>
                    </Card>

                    <Typography variant="body1" fontWeight={200} m={5}>
                        {newsDetail.content}
                    </Typography>


                </Stack>


            ) : (
                <p>Loading News...</p> // Display loading message while data is fetched
            )}
        </div>
    );
}

export default NewsDetail;