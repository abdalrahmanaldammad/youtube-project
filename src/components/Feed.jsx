import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import { Sidbar, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  let [selectedCategory, setSelectedCategory] = useState("New");
  let [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);
  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d ",
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidbar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography
            variant="body2"
            className="copyRight"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            CopyRight 2022 JSM Media
          </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "#fff" }}
          >
            {selectedCategory} <span style={{ color: "#f31503" }}>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
