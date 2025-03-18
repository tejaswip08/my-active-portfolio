import React from "react";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";

const menuBtns = [
  { btn_name: "Home", path: "/" },
  { btn_name: "About", path: "/" },
  { btn_name: "Portfolio", path: "/" },
  { btn_name: "Contact", path: "/" },
];

const NavbarProfile = () => {
  const menuBtnNavigateMethod = () => {
    console.log("BTN_TRIGGERING");
  };

  return (
    <>
      <Card className="neumorphic-card" elevation={0}>
        <CardContent>
          <nav>
            <div className="navbar-div">
              <div className="navbar-div1">
                <span className="heading1 font-weight-450">{`<Tejaswi />`}</span>
              </div>
              <div className="navbar-div2">
                {menuBtns.map((item, index) => (
                  <div key={index}>
                    <button
                      className="menu-btn btn-font"
                      onClick={menuBtnNavigateMethod}
                    >
                      {item.btn_name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </CardContent>
      </Card>
      <Card className="neumorphic-card" elevation={0} sx={{ mt: 3, p: 15 }}>
        <CardContent>
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid item xs={12} sm={12} md={8} lg={8} sx={{ p: 0 }}>
              <div>
                <div className="heading3 font-weight-450 line-space">
                  Hello,
                </div>
                <div className="heading2 font-weight-600 line-space">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              corporis similique impedit minus non ratione exercitationem
              veritatis fugit! Quasi, harum!
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default NavbarProfile;
