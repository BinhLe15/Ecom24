import { Description } from "@mui/icons-material";
import { Stack, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

function AddNews() {
    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")
    let [content, setContent] = useState("")
    let [image, setImage] = new useState("")
    const [previewImage, setPreviewImage] = useState(null);


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);

        const readerPreview = new FileReader();
        readerPreview.onloadend = () => setPreviewImage(readerPreview.result);
        readerPreview.readAsDataURL(file);
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const formData = new FormData();
    //     formData.append('image', selectedImage);
    //     formData.append('title', 'My Image');

    //     const response = await fetch('/upload', {
    //         method: 'POST',
    //         body: formData,
    //     });

    // };


    const saveData = async (e) => {
        e. preventDefault() ;
        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("content", content);
            
            await axios.post("http://localhost:8000/writefromserver",formData)
            alert("News data saved");
        } catch (error) {
            console.log("Error while saving dude: ", error.message);
        }
    }

    const onImageInputChange = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }

    return (
        
        <form  onSubmit={saveData} encType="multipart/form-data">
            <header>
            <Typography variant="h3" align="center" mt={5}>
                Add News
            </Typography>
            </header>
             
            <Stack spacing={2} ml={20} mr={20} mt={10} mb={10}>
            <TextField label="News Title" variant="standard" value={title} onChange={e => setTitle(e.target.value)}/>

            <TextField label="News Description" variant="standard"  value={description} onChange={e => setDescription(e.target.value)}/>

            <input type="file" onChange={handleImageChange} />
                {previewImage && <img src={previewImage} height={300} alt="Preview" />}

            <TextField label="News Content" variant="standard"   value={content} onChange={e => setContent(e.target.value)}/>

            <Button variant="outlined" onClick={saveData}>Submit News</Button>

            </Stack>
        
        </form>
    );
}

export default AddNews;