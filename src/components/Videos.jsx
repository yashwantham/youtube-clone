import { Stack, Box} from "@mui/material";

import { VideoCard, ChannelCard, Loader } from "./";

const Videos = ({videos, direction}) => {
    // console.log(videos);
    if(!videos?.length) return 'Loading...';
    // if(!videos?.length) return <Loader />;
    return (
        // <Stack direction="row" flexWrap="wrap" justifyContent="space-around" gap={2}>
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="space-around">
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} idx={idx}/>}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos