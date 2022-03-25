import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import "./intro.css";
import profileImg from "../../assets/img/avatar.jpg";
import AboutSection from "../../components/aboutSection";
function IntroSection() {
  return (
    <>
      <Box
        md={{ marginTop: "70px" }}
        xs={{ marginTop: "70px" }}
        sm={{
          marginTop: "70px",
        }}
      >
        <Grid container rowSpacing={2}>
          <Grid item xs={12} md={6} lg={6} mt={30}>
            {/* <div> */}
            <h2 style={{ fontSize: "30px", fontWeight: "500" }}>
              Hello, My name is
            </h2>
            <h1
              style={{
                color: "#121e1e",
                fontWeight: "bold",
                marginBottom: " 58px",
                fontSize: "40px",
                textDecoration: "underline wavy #70d570 5px",
              }}
            >
              {" "}
              Ramsha Nadeem
            </h1>
            <div
              style={{
                height: "50px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  animation: "move 10s ease-in-out infinite alternate",
                }}
              >
                <div
                  style={{
                    color: "rgb(79 88 191)",
                    fontSize: "25px",
                    fontWeight: "600",
                  }}
                >
                  ReactJs
                </div>
                <div
                  style={{
                    color: "rgb(79 88 191)",
                    fontSize: "25px",
                    fontWeight: "600",
                  }}
                >
                  Typescript
                </div>
                <div
                  style={{
                    color: "rgb(79 88 191)",
                    fontSize: "25px",
                    fontWeight: "600",
                  }}
                >
                  Es6{" "}
                </div>
                <div
                  style={{
                    color: "rgb(79 88 191)",
                    fontSize: "25px",
                    fontWeight: "600",
                  }}
                >
                  Javascript{" "}
                </div>
                <div
                  style={{
                    color: "rgb(79 88 191)",
                    fontSize: "25px",
                    fontWeight: "600",
                  }}
                >
                  Blockchain
                </div>
                <div
                  style={{
                    color: "rgb(79 88 191)",
                    fontSize: "25px",
                    fontWeight: "600",
                  }}
                >
                  Web3
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "28px",
                fontSize: "17px",
              }}
            >
              Graduated software engineer and a web developer who is experienced
              in frontend, comfortable working with reactJS
            </div>
            {/* </div> */}
          </Grid>
          <Grid item xs={12} md={6} lg={6} mt={20}>
            <div>
              <div>
                <img alt="" width={460} src={profileImg} />
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid>
          <AboutSection />
        </Grid>
      </Box>
    </>
  );
}

export default IntroSection;
