import React, { useContext } from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import { Wrapper, DoubleBoxWrapper, Details, Thumbnail } from './styles';


export const DoubleBox = ( {imgSrc, detailsContent, imgLeft = true} ) => {
  const { theme } = useContext(ThemeContext);


  const imgBox = (
    <Thumbnail>
      <img src={imgSrc} alt="" />
    </Thumbnail>
  )

  const textBox = (
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
  )

  return (
    <Wrapper id="about">
      <DoubleBoxWrapper as={Container}>
        {imgLeft ? <>{imgBox}{textBox}</> : <>{textBox}{imgBox}</>}
      </DoubleBoxWrapper>
    </Wrapper>
  );
};
