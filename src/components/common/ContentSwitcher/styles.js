import styled from 'styled-components';

export const ContentSwitcherWrapper = styled.div`
  position: relative;
  max-height: 100%;
`

export const TabsWrapper = styled.div`
  position: sticky;
  top: 12px;
  z-index: 2;
  display: flex;
  justify-content: center;
`;

export const Tabs = styled.div`
  display: inline-block;
  height: 72px;
  border-radius: 48px;
  background: #7b53c1;
  box-shadow: 0 14px 24px 0 rgba(50,49,58,.25);
  z-index: 2;
  vertical-align: middle;
`;

export const TabItem = styled.a`
  display: inline-block;
  color: #fff;
  font-weight: ${props => props.active ? 600 : 400};
  font-size: 1.25rem;
  text-align: center;
  line-height: 72px;
  cursor: pointer;
  position: relative;
  padding: 0 32px;

  &:not(:last-of-type)::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 16px;
    height: 40px;
    border-right: 1px solid rgba(255,255,255,.11);
  }
`

export const TabsWrapperOuter = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  top: -36px;
`
