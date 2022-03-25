import React from "react";
import Grid from "@mui/material/Grid";
const ContactSection = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            {" "}
            <h2>Contact Information</h2>
          </div>
        </Grid>

        <Grid style={{ paddinleft: "106px" }} item xs={12} md={6} sm={6}>
          <div
            style={{
              margin: "20px",
              padding: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            Full Name
          </div>

          <div
            style={{
              padding: "20px",
              margin: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            Phone Number
          </div>
          <div
            style={{
              margin: "20px",
              padding: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            email address
          </div>
          <div
            style={{
              padding: "20px",
              margin: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            {" "}
            LinkdIn Profile:
          </div>
          <div
            style={{
              padding: "20px",
              margin: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            github Link:
          </div>
        </Grid>
        <Grid style={{ paddinleft: "106px" }} item xs={12} md={6} sm={6}>
          <div
            style={{
              margin: "20px",
              padding: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            Ramsha Nadeem
          </div>

          <div
            style={{
              padding: "20px",
              margin: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            +923342954361
          </div>
          <div
            style={{
              margin: "20px",
              padding: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            rimshanadeem64@gmail.com
          </div>
          <div
            style={{
              padding: "20px",
              margin: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            {" "}
            https://www.linkedin.com/in/ramsha-nadeem-102722209
          </div>
          <div
            style={{
              padding: "20px",
              margin: "20px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            https://github.com/ramshanadeem
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactSection;
