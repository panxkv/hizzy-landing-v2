import React, { useContext } from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import { Wrapper, DoubleBoxWrapper, Details, Thumbnail } from './styles';

export const DoubleBox = ( {imgSrc, detailsContent} ) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <DoubleBoxWrapper as={Container}>
        <Thumbnail>
          <img src={imgSrc} alt="" />
        </Thumbnail>
        <Details theme={theme}>
          {detailsContent}
          {/* <h1>Oglądanie mieszkania online</h1>
          <p>
            Umawiaj się na oglądanie mieszkania za pośrednictwem aplikacji wybierając termin z kalendarza dostępności właściciela.
          </p> */}
          {/* <Button as={AnchorLink} href="#contact">
            Hire me
          </Button> */}
        </Details>
      </DoubleBoxWrapper>
    </Wrapper>
  );
};
