import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({video: {id: {videoId}, snippet}, idx}) => {
    // console.log(videoId, snippet);
    // console.log(snippet?.thumbnails?.high?.url);
    // console.log(idx);
  return (
    // <Card sx={{ width: {md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius: '12px'}}>
    <Card sx={{ width: {md: '390px', xs: '90%'}, boxShadow: 'none', borderRadius: '12px', m: '20px'}}>
        {/* <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            {(idx === 1 || idx === 7 || idx === 12 ) ? <CardMedia image={demoThumbnailUrl} alt={snippet?.title} sx={{width: 358, height: 180}}/> :  <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width: 358, height: 180}}/> }
        </Link> */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            {(idx === 1 || idx === 7 || idx === 12 ) ? <CardMedia image={demoThumbnailUrl} alt={snippet?.title} sx={{width: 390, height: 180, objectFit: 'cover'}}/> :  <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width: 390, height: 180,  objectFit: 'cover'}}/> }
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard