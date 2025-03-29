import React from "react";
import { Card, CardContent, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
// import muiLogo from "../assets/mui-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faVuejs,
  faCss3,
  faHtml5,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const techIconArray = [
  { icon_name: faJs, icon_desc: "JavaScript" },
  { icon_name: faReact, icon_desc: "React.js" },
  { icon_name: faVuejs, icon_desc: "Vue.js" },
  // { icon_name: muiLogo, icon_desc: "MUI" },
  { icon_name: faCss3, icon_desc: "CSS" },
  { icon_name: faHtml5, icon_desc: "HTML" },
  { icon_name: faBootstrap, icon_desc: "Bootstrap" },
];

const AboutMe = () => {
  return (
    <>
      <Card className="neumorphic-card" elevation={0} sx={{ mt: 3, p: 5 }}>
        <CardContent>
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid item xs={12} sm={12} md={8} lg={8} sx={{ p: 0 }}>
              <div className="heading2 font-weight-500 line-space text-shadow">
                Who Am I_
              </div>
              <Box
                className="heading4  grey-color"
                sx={{ pl: 1, mt: 2, textAlign: "justify" }}
              >
                I'm an experienced frontend developer, specializing in building
                responsive and user-friendly web applications using React.js,
                Vue.js, JavaScript, HTML, and CSS. Passionate about crafting
                clean and efficient code, I focus on delivering seamless user
                experiences and staying updated with the latest frontend
                technologies.
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ p: 0, display: "flex", justifyContent: "end" }}
              className="flex-div-type1"
            >
              <Box>
                <Box
                  className="neumorphic-card"
                  sx={{
                    width: "fit-content",
                    textAlign: "center",
                    p: 2,
                  }}
                >
                  <div className="heading5  grey-color font-weight-500">5+</div>
                  <div className="heading5">Project Completed</div>
                </Box>
                <Box
                  className="neumorphic-card"
                  sx={{
                    textAlign: "center",
                    p: 2,
                    mt: 4,
                  }}
                >
                  <div className="heading5">
                    Hiring? Let's talk about how I can contribute!
                  </div>
                  <div className="heading5  grey-color font-weight-500">
                    tejaswip0811@gmail.com
                  </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 10 }}>
            <div className="heading2 font-weight-500 line-space text-shadow">
              Specialized In_
            </div>
          </Box>
          <Box sx={{ mt: 3 }} className="flex-div-type2">
            {techIconArray.map((icon, index) => (
              <Box key={index} sx={{ ml: 3, mr: 3, mb: 3 }}>
                <Tooltip title={icon.icon_desc} arrow>
                  {/* {icon.icon_desc !== "MUI" ? (
                    <button
                      className="profile-pic-btn"
                      style={{ padding: "20px 23px 20px 23px" }}
                    >
                      <FontAwesomeIcon icon={icon.icon_name} size="3x" />
                    </button>
                  ) : (
                    <img src={icon.icon_name} style={{ width: "50px" }} />
                  )} */}
                  <button
                    className="profile-pic-btn"
                    style={{ padding: "20px 22px 20px 22px" }}
                  >
                    <FontAwesomeIcon icon={icon.icon_name} size="2x" />
                  </button>
                </Tooltip>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default AboutMe;
