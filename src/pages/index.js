import React, {useState} from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Skills2, Contact } from 'components/landing';
import styled from 'styled-components';

const sectionLeft = {
  title: 'Hello World',
  content: (
    <div style={{backgroundColor: "yellow"}}>
      <Skills />
      <Skills2 />
    </div>
  )
}

const sectionRight = {
  title: 'What up dog',
  content: (
    <div style={{backgroundColor: "red"}}>
      <Skills2 />
      <Skills />
    </div>
  )
}

const TabsWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  text-transform: capitalize;
  justify-content: center;
`;

const Tabs = styled.div`
  /* margin-top: -40px; */
  position: relative;
  display: inline-block;
  width: auto;
  /* margin-top: -25px; */
  height: 72px;
  border-radius: 48px;
  background: #7b53c1;
  box-shadow: 0 14px 24px 0 rgba(50,49,58,.25);
  z-index: 2;
  vertical-align: middle;
}
`;

const TabItem = styled.a`
  display: inline-block;
  color: #fff;
  font-weight: ${props => props.active ? 600 : 400};
  font-size: 1.25rem;
  text-align: center;
  line-height: 72px;
  cursor: pointer;
  position: relative;
  padding: 0 32px;

  &:not(:last-of-type)::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 16px;
    height: 40px;
    border-right: 1px solid rgba(255,255,255,.11);
  }
`

const ContentContainer = styled.div`
`

const ContentSwitcher = ({sectionLeft, sectionRight}) => {
  const [isSectionLeftActive, setIsSectionLeftActive] = useState(true);

  return (
    <div style={{position: 'relative'}}>

      <TabsWrapper>
        <Tabs>
          <TabItem onClick={() => setIsSectionLeftActive(true)} active={isSectionLeftActive}>{sectionLeft.title}</TabItem>
          <TabItem onClick={() => setIsSectionLeftActive(false)} active={!isSectionLeftActive}>{sectionRight.title}</TabItem>
        </Tabs>
      </TabsWrapper>

      <ContentContainer>
        {isSectionLeftActive ? sectionLeft.content : sectionRight.content}
      </ContentContainer>
    </div>
  )
}


export default () => (
  <Layout>
    <SEO />
    <Intro />
    <ContentSwitcher sectionLeft={sectionLeft} sectionRight={sectionRight} />
    <Contact />
  </Layout>
);
