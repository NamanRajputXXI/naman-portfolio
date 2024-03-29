import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi <br />
  My name is Naman Rajput
          
        </SectionTitle>
        <SectionText>
          Meticulous frontend web developer work in react js to deliver
          exceptional customer experience. Adept at contributing to a highly
          collaborative work, finding solution and determining customer
          satisfaction.{" "}
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
