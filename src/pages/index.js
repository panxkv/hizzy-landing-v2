import React from 'react';
import { Layout, SEO, ContentSwitcher } from 'components/common';
import { Intro, Skills, Skills2, Contact } from 'components/landing';

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

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <ContentSwitcher sectionLeft={sectionLeft} sectionRight={sectionRight} />
    <Contact />
  </Layout>
);
