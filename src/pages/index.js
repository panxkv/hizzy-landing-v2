import React, {useState} from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Skills2, Contact } from 'components/landing';
import styled from 'styled-components';

const sectionLeft = {
  title: 'Hello World',
  content: (
    <>
      <Skills />
      <Skills2 />
    </>
  )
}

const sectionRight = {
  title: 'What up dog',
  content: (
    <>
      <Skills2 />
      <Skills />
    </>
  )
}

const TabsWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  text-transform: capitalize;
  justify-content: center;
  /* background-color: blue; */
`;

const Tabs = styled.div`
  margin-top: -40px;
  position: relative;
  display: inline-block;
  width: auto;
  margin-top: -25px;
  height: 72px;
  border-radius: 48px;
  background: #7b53c1;
  box-shadow: 0 14px 24px 0 rgba(50,49,58,.25);
  z-index: 2;
  vertical-align: middle;
}
`;

const TabItem = styled.a`
  color: #fff;
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
  line-height: 72px;
  cursor: pointer;
  position: relative;
  padding: 0 32px;
`

const ContentContainer = styled.div`
`

const ContentSwitcher = ({sectionLeft, sectionRight}) => {
  const [isSectionLeftActive, setIsSectionLeftActive] = useState(true);

  return (
    <div style={{position: 'relative'}}>

      <TabsWrapper>
        <Tabs>
          <TabItem onClick={() => setIsSectionLeftActive(true)}>{sectionLeft.title}</TabItem>
          <TabItem onClick={() => setIsSectionLeftActive(false)}>{sectionRight.title}</TabItem>
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
    {/* <Skills />
    <Skills2 /> */}
    <Contact />
  </Layout>
);
