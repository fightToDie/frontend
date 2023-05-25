import React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";

import Ditto from "../../assests/images/Ditto.png";
import NewPlant from "../../assests/images/NewPlant.png";
import TellUs from "../../assests/images/TellUs.png";

const GenreItemList = () => {
  return (
    <Box sx={{ marginTop: "-10px" }}>
      <ImageList cols={3} gap={45}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{
                borderRadius: 7,
              }}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

const itemData = [
  {
    img: Ditto,
    title: "Ditto",
  },
  {
    img: NewPlant,
    title: "NewPlant",
  },
  {
    img: TellUs,
    title: "TellUs",
  },
  {
    img: NewPlant,
    title: "NewPlant2",
  },
  {
    img: TellUs,
    title: "TellUs2",
  },
  {
    img: Ditto,
    title: "Ditto2",
  },
];

export default GenreItemList;
