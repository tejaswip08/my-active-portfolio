import React from "react";
import { Card, CardContent, Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const enjoyLogos = [
  { icon: faCode, desc: "Coding" },
  { icon: faBookOpenReader, desc: "Reading" },
  { icon: faMicrophone, desc: "Singing" },
  { icon: faMotorcycle, desc: "Bike Riding" },
];

const MyEnjoyments = () => {
  return (
    <>
      <Card className="neumorphic-card" elevation={0} sx={{ mt: 3, p: 5 }}>
        <CardContent>
          <div className="heading2 font-weight-500 line-space text-shadow">
            My Enjoyments
          </div>
          <div className="navbar-div2-type2">
            <Box className="navbar-div navbar-div-resp" sx={{ mt: 5 }}>
              {enjoyLogos.map((item, index) => (
                <Tooltip key={index} title={item.desc} arrow>
                  <div className="enjoy-icon-div">
                    <FontAwesomeIcon
                      icon={item.icon}
                      size="8x"
                      className="grey-color"
                    />
                  </div>
                </Tooltip>
              ))}
            </Box>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default MyEnjoyments;
