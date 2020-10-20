import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, TenantInfo, LandLordInfo, Contact } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    {/*<TenantInfo />*/}
    <LandLordInfo/>
    <Contact />
    Rea
  </Layout>
);
