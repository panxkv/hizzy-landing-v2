import React from 'react';
import { ContentSwitcher } from 'components/common';
import { TenantInfo } from './TenantInfo';
import { LandLordInfo } from './LandLordInfo';

// ffe65a

const sectionLeft = {
  title: 'Szukam mieszkania',
  content: (
    <div style={{backgroundColor: "#f6f6f6"}}>
      <TenantInfo />
    </div>
  ),
};

const sectionRight = {
  title: 'Jestem właścicielem',
  content: (
    <div style={{backgroundColor: "#ffb8b8"}}>
      <LandLordInfo />
    </div>
  ),
};

export const OwnerOrRenter = () => (
  <div id="owner-or-renter" style={{paddingTop: "1rem"}}>
    {/* <div style={{margin: "0 auto", textAlign: "center", maxWidth: "600px", marginBottom: "80px"}}>
      <h1 style={{fontWeight: 600}}>Powiedz nam kim jesteś, a my powiemy jak Hizzy może Ci pomóc 💁</h1>
    </div> */}
    <ContentSwitcher sectionLeft={sectionLeft} sectionRight={sectionRight} />;
  </div>
)
