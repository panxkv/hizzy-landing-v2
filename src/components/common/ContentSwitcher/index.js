import React, {useState} from 'react';
import { TabsWrapperOuter, TabsWrapper, Tabs, TabItem, ContentSwitcherWrapper } from './styles';

export const ContentSwitcher = ({sectionLeft, sectionRight}) => {
  const [isSectionLeftActive, setIsSectionLeftActive] = useState(true);

  return (
    <ContentSwitcherWrapper>
      <TabsWrapperOuter>
        <TabsWrapper>
          <Tabs>
            <TabItem onClick={() => setIsSectionLeftActive(true)} active={isSectionLeftActive}>{sectionLeft.title}</TabItem>
            <TabItem onClick={() => setIsSectionLeftActive(false)} active={!isSectionLeftActive}>{sectionRight.title}</TabItem>
          </Tabs>
        </TabsWrapper>
      </TabsWrapperOuter>

      <div>
        {isSectionLeftActive ? sectionLeft.content : sectionRight.content}
      </div>
    </ContentSwitcherWrapper>
  )
}
