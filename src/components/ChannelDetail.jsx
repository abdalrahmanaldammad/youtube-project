import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { demoProfilePicture } from "../utils/constants";

const ChannelDetail = () => {
  let [channelDetail, setChannelDetail] = useState(null);
  let [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchResulte = async () => {
      let data = await fetchFromApi(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0] || demoProfilePicture);

      let videodata = await fetchFromApi(
        `search?channelId=${id}&part=snippet&order=date`
      );
      setVideos(videodata?.items);
    };
    fetchResulte();
  }, [id]);

  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              background:
                "linear-gradient(90deg,rgba(0,238,247,1) 0%,rgba(206,3,184,1)100%,rgba(0,212,255,1) 100%)",
              zIndex: 10,
              height: "300px",
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        </Box>
        <Box display="flex" p="2">
          <div style={{width:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <Videos videos={videos} />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
