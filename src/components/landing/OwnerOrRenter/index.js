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

export const OwnerOrRenter = () => <ContentSwitcher sectionLeft={sectionLeft} sectionRight={sectionRight} />;
