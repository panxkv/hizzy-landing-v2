import React, {useState} from 'react';
import { TabsWrapperOuter, TabsWrapper, Tabs, TabItem, ContentSwitcherWrapper } from './styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const ContentSwitcher = ({sectionLeft, sectionRight}) => {
  const [isSectionLeftActive, setIsSectionLeftActive] = useState(true);

  return (
    <ContentSwitcherWrapper>
      <TabsWrapperOuter>
        <TabsWrapper>
          <Tabs>
            <TabItem
              as={AnchorLink}
              href="#owner-or-renter"
              onClick={() => setIsSectionLeftActive(true)}
              active={isSectionLeftActive}>
                {sectionLeft.title}
            </TabItem>
            <TabItem
              as={AnchorLink}
              href="#owner-or-renter"
              onClick={() => setIsSectionLeftActive(false)}
              active={!isSectionLeftActive}>
              {sectionRight.title}
            </TabItem>
          </Tabs>
        </TabsWrapper>
      </TabsWrapperOuter>

      <div>
        <div style={{display: isSectionLeftActive ? 'block' : 'none'}}>
          {sectionLeft.content}
        </div>
        <div style={{display: isSectionLeftActive ? 'none' : 'block'}}>
          {sectionRight.content}
        </div>
      </div>
    </ContentSwitcherWrapper>
  )
}
