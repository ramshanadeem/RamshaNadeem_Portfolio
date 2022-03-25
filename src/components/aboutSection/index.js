import React from "react";
import Grid from "@mui/material/Grid";
import AboutImg from "../../assets/img/aboutusImg.jpg";
const AboutSection = () => {
  return (
    <>
      <div style={{ marginTop: "15%" }}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <div
              style={{
                textDecoration: "underline wavy #70d570 5px",
              }}
            >
              {" "}
              <h2>About My knowledge</h2>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} md={6}>
            {" "}
            <img style={{ width: "92%" }} alt="" src={AboutImg} />
          </Grid>
          <Grid item xs={12} sm={6} lg={6} md={6}>
            <div style={{ marginRight: "32px", marginTop: "100px" }}>
              <p>
                Graduated software engineer from UBIT university of karachi who
                want to focus on creative website development are expected to
                gain and integrate knowledge from various subject areas
                including computer programming, data structures, algorithms,
                numerical methods, statistics, design patterns, human-computer
                interaction, information visualization, who has blockchain,web3
                knowledge Experienced in frontend developement.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AboutSection;
