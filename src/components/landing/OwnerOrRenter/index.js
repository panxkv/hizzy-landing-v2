import React from 'react';
import { ContentSwitcher } from 'components/common';
import { TenantInfo } from './TenantInfo';
import { LandLordInfo } from './LandLordInfo';

const sectionLeft = {
  title: 'Renter',
  content: (
    <div>
      <TenantInfo />
    </div>
  ),
};

const sectionRight = {
  title: 'Owner',
  content: (
    <div>
      <LandLordInfo />
    </div>
  ),
};

export const OwnerOrRenter = () => <ContentSwitcher sectionLeft={sectionLeft} sectionRight={sectionRight} />;
