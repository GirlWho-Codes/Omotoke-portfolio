import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <>
    <Section id='#tech'>
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have worked with a range of technologies in Frontend Development world.</SectionText>
    <List>
      
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            HTML <br/>
            CSS <br/>
            JavaScript 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Libraries</ListTitle>
          <ListParagraph>
            React.js <br/>
            Redux <br />
            Next.js <br />
            Bootstrap <br />
            Tailwind
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            Redux <br/>
            TypeScript <br />
            Api <br />
            Google Authentication <br />
            Payment Integration
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
  </>

);

export default Technologies;
