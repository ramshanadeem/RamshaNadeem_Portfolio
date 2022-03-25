import React from "react";
import IntroSection from "../introSection";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AboutSection from "../aboutSection";
import ContactSection from "../contactSection";

function Home() {
  return (
    <>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IntroSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{
            height: "100%",
            backgroundImage:
              "linear-gradient( to top right, #b4df2f, rgb(46 187 219 / 84%))",
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <ContactSection />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Home;
