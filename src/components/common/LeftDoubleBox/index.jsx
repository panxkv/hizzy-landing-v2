import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import { Wrapper, DoubleBoxWrapper, Details, Thumbnail } from './styles';


export const LeftDoubleBox = ( {imgSrc, detailsContent, imgLeft = true} ) => {
  const { theme } = useContext(ThemeContext);


  const imgBox = (
    <Thumbnail>
      <img src={imgSrc} alt="" />
    </Thumbnail>
  )

  const textBox = (
    <Details theme={theme}>
      {detailsContent}
    </Details>
  )

  return (
    <Wrapper>
      <DoubleBoxWrapper as={Container}>
        <>{textBox}{imgBox}</>
      </DoubleBoxWrapper>
    </Wrapper>
  );
};
