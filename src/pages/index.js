import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Contact } from 'components/landing';
import {OwnerOrRenter} from 'components/landing/OwnerOrRenter';


export default () => (
  <Layout>
    <SEO />
    <Intro />
    <OwnerOrRenter />
    <Contact />
  </Layout>
);
