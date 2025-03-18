import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
// import myImage from "../assets/teju.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

const menuBtns = [
  { btn_name: "Home", path: "/" },
  { btn_name: "About", path: "/" },
  { btn_name: "Portfolio", path: "/" },
  { btn_name: "Contact", path: "/" },
];

const NavbarProfile = () => {
  const [state, setState] = useState({
    menuBtnEnabled: false,
  });

  const enableDisableMenu = () => {
    setState({ menuBtnEnabled: !state.menuBtnEnabled });
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
                      <button className="menu-btn btn-font">
                        {item.btn_name}
                      </button>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
          </nav>
        </CardContent>
      </Card>
      <Card className="neumorphic-card" elevation={0} sx={{ mt: 3, p: 15 }}>
        <CardContent>
          <Grid container spacing={0} sx={{ alignItems: "center" }}>
            <Grid item xs={12} sm={12} md={8} lg={8} sx={{ p: 0 }}>
              <div>
                <div className="heading3 font-weight-450 line-space text-shadow">
                  Hello,
                </div>
                <div className="heading2 font-weight-600 line-space text-shadow">
                  I'm a Front End Web Developer
                </div>
                <div className="heading4 line-space grey-color">
                  I'm Tejaswi, Professional Web Developer. Need any help?
                </div>
                <div className="flex-div-type1" style={{ marginTop: "20px" }}>
                  <div style={{ marginRight: "30px" }}>
                    <button
                      className="menu-btn"
                      style={{
                        border: "2px solid #5a626f",
                        paddingLeft: "60px",
                        paddingRight: "60px",
                        margin: "0",
                      }}
                    >
                      Hire Me
                    </button>
                  </div>
                  <div style={{ marginLeftt: "30px" }}>
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
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} sx={{ p: 0 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, temporibus accusantium. Quod dolores nam corporis eos
              dicta amet debitis accusantium, minima cum expedita tempore neque
              minus iure ipsa animi rem similique quos, earum, iusto itaque vel.
              Molestias natus deserunt, fugiat eaque accusamus sit explicabo,
              odit ducimus recusandae id cupiditate similique?
              {/* <Box className="image-box" sx={{ p: 2 }}>
                <img className="image-box" src={myImage} />
              </Box> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default NavbarProfile;
