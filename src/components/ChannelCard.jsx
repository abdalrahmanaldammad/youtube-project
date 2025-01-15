import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
const ChannelCard = ({ channelDetail,marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "365px", md: "320px" },
        height: "326px",
        m: "auto",
        marginTop
      }}
    >
      <Link to={`/channel/:${channelDetail?.id}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            alignItems: 'center'
          }}
        >
          <CardMedia
            alt={channelDetail?.snippet?.title}
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              border: "1px solid #3e3e3e",
            }}
          
          />
          <Typography variant="h6" color="#fff">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ color: "gray", fontSize: 12, ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant="h1" color="initial">
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}
              subscibers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
