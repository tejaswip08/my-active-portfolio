import React from "react";
import { Card, CardContent, Box } from "@mui/material";

const FooterCard = () => {
  return (
    <>
      <Card className="neumorphic-card" elevation={0} sx={{ mt: 3, p: 5 }}>
        <CardContent>
          <div className="navbar-div2-type2">
            <div
              className="heading6 font-weight-500  grey-color"
              style={{ textAlign: "center" }}
            >
              Designed and Developed by Tejaswi Sagar
            </div>
            <div style={{ textAlign: "center" }}>
              Tejaswi Sagar, {new Date().getFullYear()} All Rights Reserved
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default FooterCard;
