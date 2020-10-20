import React from 'react';
import {TenantInfo} from './TenantInfo';
import {ContentSwitcher} from 'components/common';

const sectionLeft = {
  title: 'Renter',
  content: (
    <div style={{backgroundColor: "yellow"}}>
      <TenantInfo />
    </div>
  )
}

const sectionRight = {
  title: 'Owner',
  content: (
    <div style={{backgroundColor: "red"}}>
      <TenantInfo />
    </div>
  )
}

export const OwnerOrRenter = () => <ContentSwitcher sectionLeft={sectionLeft} sectionRight={sectionRight} />;
