import React from 'react';
import { Layout, SEO } from 'components/common';
import {Intro, Contact, OwnerOrRenter } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <OwnerOrRenter />
    <Contact />
  </Layout>
);
