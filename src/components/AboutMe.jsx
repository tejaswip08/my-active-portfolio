import React from "react";
import { Card, CardContent, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

const AboutMe = () => {
  return (
    <>
      <Card className="neumorphic-card" elevation={0} sx={{ mt: 3, p: 5 }}>
        <CardContent>
          <Grid container spacing={0} sx={{ alignItems: "center" }}>
            <Grid item xs={12} sm={12} md={8} lg={8} sx={{ p: 0 }}>
              <div className="heading2 font-weight-600 line-space text-shadow">
                Who Am I_
              </div>
              <Box className="heading4  grey-color" sx={{ pl: 1, mt: 2 }}>
                I'm an experienced frontend developer, specializing in building
                responsive and user-friendly web applications using React.js,
                Vue.js, JavaScript, HTML, and CSS. Passionate about crafting
                clean and efficient code, I focus on delivering seamless user
                experiences and staying updated with the latest frontend
                technologies.
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default AboutMe;
