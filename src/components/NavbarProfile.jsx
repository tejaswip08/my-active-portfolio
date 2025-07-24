import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { Card, CardContent, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

import myImage from "../assets/profile-pic2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import myResume from "../assets/Tejaswi_FrontEnd_Resume.pdf";

const menuBtns = [
  { btn_name: "Home", path: "/" },
  { btn_name: "About", path: "about" },
  { btn_name: "Portfolio", path: "enjoyments" },
  { btn_name: "Contact", path: "contactme" },
];

const NavbarProfile = () => {
  const [state, setState] = useState({
    menuBtnEnabled: false,
  });

  const enableDisableMenu = () => {
    setState((prevState) => ({
      ...prevState,
      menuBtnEnabled: !prevState.menuBtnEnabled,
    }));
  };

  return (
    <>
      <Card className="neumorphic-card" elevation={0}>
        <CardContent>
          <nav>
            <Grid container spacing={0} sx={{ alignItems: "center" }}>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <div>
                  <FontAwesomeIcon
                    className="display-menu-bar"
                    style={
                      state.menuBtnEnabled
                        ? { padding: "20px 22px 20px 22px" }
                        : { padding: "20px" }
                    }
                    icon={state.menuBtnEnabled ? faXmark : faBarsStaggered}
                    size="1x"
                    onClick={enableDisableMenu}
                  />
                  <span className="heading1 font-weight-450">{`<Tejaswi />`}</span>
                </div>
              </Grid>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <div
                  className={
                    state.menuBtnEnabled ? "navbar-div2" : "hide-navbar-div2"
                  }
                >
                  {menuBtns.map((item, index) => (
                    <div key={index}>
                      <Link to={item.path} smooth={true} duration={1500}>
                        <button
                          className="menu-btn btn-font"
                          style={{ width: "clamp(130px, 20vw, 130px)" }}
                        >
                          {item.btn_name}
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
          </nav>
        </CardContent>
      </Card>
      <Card className="neumorphic-card" elevation={0} sx={{ mt: 3, p: 5 }}>
        <CardContent>
          <Grid container spacing={0} sx={{ alignItems: "center" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              sx={{ p: 0 }}
              className="nav-profile-firstcol"
            >
              <div>
                <div className="heading3 font-weight-400 line-space text-shadow ">
                  Hello,
                </div>
                <div className="heading2 font-weight-500 line-space text-shadow">
                  I'm a Front End Web Developer
                  {/* <span className="typing-animation">
                    Front End Web Developer
                  </span> */}
                </div>
                <div className="heading4 line-space grey-color np-fc">
                  I'm Tejaswi, Professional Web Developer. Need any help?
                </div>
                <div className="flex-div-type1" style={{ marginTop: "20px" }}>
                  <div style={{ marginRight: "30px" }}>
                    <Link to="contactme" smooth={true} duration={1500}>
                      <button
                        className="menu-btn profile-btn-resp1"
                        style={{
                          border: "2px solid #5a626f",
                          paddingLeft: "60px",
                          paddingRight: "60px",
                          margin: "0",
                        }}
                      >
                        Hire Me
                      </button>
                    </Link>
                  </div>
                  <div style={{ marginLeftt: "30px" }}>
                    <a href={myResume} download="Tejaswi_FrontEnd_Resume.pdf">
                      <button
                        className="menu-btn"
                        style={{
                          border: "2px solid #5a626f",
                          paddingLeft: "60px",
                          paddingRight: "60px",
                          margin: "0",
                        }}
                      >
                        View Resume
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className="nav-profile-secondcol"
            >
              <Box>
                <Box className="image-box">
                  <img src={myImage} className="round-custom-img" />
                </Box>
                <Box className="flex-div-type2" sx={{ mt: 3 }}>
                  <Tooltip title="GitHub" arrow>
                    <a href="https://github.com/tejaswip08">
                      <button
                        style={{ marginRight: "20px" }}
                        className="profile-pic-btn"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="profile-pic-font"
                        />
                      </button>
                    </a>
                  </Tooltip>
                  <Tooltip title="LinkedIn" arrow>
                    <a href="https://www.linkedin.com/in/tejaswi-sagar/">
                      <button
                        style={{ marginRight: "20px" }}
                        className="profile-pic-btn"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="profile-pic-font"
                        />
                      </button>
                    </a>
                  </Tooltip>
                  <Tooltip title="Instagram" arrow>
                    <a
                      href="https://www.instagram.com/tejaswi.sagar/
         "
                    >
                      <button className="profile-pic-btn">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="profile-pic-font"
                        />
                      </button>
                    </a>
                  </Tooltip>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default NavbarProfile;
