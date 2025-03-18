import React, { useState, useLayoutEffect } from "react";
import NavbarProfile from "./NavbarProfile";
import { Box } from "@mui/material";

const ZoomRespDiv = () => {
  const [width, setWidth] = useState("100%");

  const getZoomLevel = () => {
    const zoomChrome = Math.round(window.devicePixelRatio * 100);
    const zoomFirefox = Math.round((screen.width / window.innerWidth) * 100);
    return Math.min(zoomChrome, zoomFirefox);
  };

  const adjustWidthBasedOnZoom = () => {
    const zoom = getZoomLevel();
    if (zoom >= 100) {
      setWidth("100%");
    } else {
      setWidth(`${zoom}%`);
    }
    // console.log("Actual ZOOM Level:", zoom);
  };

  useLayoutEffect(() => {
    adjustWidthBasedOnZoom();
    window.addEventListener("resize", adjustWidthBasedOnZoom);
    return () => {
      window.removeEventListener("resize", adjustWidthBasedOnZoom);
    };
  }, []);

  return (
    <Box
      sx={{ mx: "auto", width: width, transition: "width 0.6s ease-in-out" }}
    >
      <NavbarProfile />
    </Box>
  );
};

export default ZoomRespDiv;
