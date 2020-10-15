import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Skills2, Contact } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Skills2 />
    <Contact />
  </Layout>
);
