import React from 'react';

import { Section, SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import Button from '../../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Omotoke Okeyemi 
      </SectionTitle>
      <SectionText>
        I am a Frontend Developer with 3+ years experience building and maintaining responsive web applications and websites
      </SectionText>
      <Button onClick={props.handleClick}>Learn more</Button>
    </LeftSection>
  </Section>
  </>

);

export default Hero;