import { useNavigate } from "react-router-dom";
import { ArrowBackIos } from '@mui/icons-material';
import { Typography } from "@mui/material";

export const BackButton = () => {
    let navigate = useNavigate();
    return (
        <>
          <button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={() => navigate(-1)}>
            <ArrowBackIos style={{ color: 'white' }} fontSize='small'></ArrowBackIos>
            <span style={{ color: 'white' }}>Back</span>
          </button>
        </>
    );
};
