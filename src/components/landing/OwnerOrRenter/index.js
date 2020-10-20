import React from 'react';
import {Skills, Skills2} from 'components/landing';
import {ContentSwitcher} from 'components/common';

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

export const OwnerOrRenter = () => <ContentSwitcher sectionLeft={sectionLeft} sectionRight={sectionRight} />;
