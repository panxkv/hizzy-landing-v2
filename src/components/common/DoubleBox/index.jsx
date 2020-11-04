import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { DoubleBoxWrapper, Details, Thumbnail } from './styles';

export const DoubleBox = ( {imgSrc, detailsContent, imgPosition = 'left'} ) => {
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
    <DoubleBoxWrapper as={Container} imgPosition={imgPosition}>
      {imgPosition === 'left' ? <>{imgBox}{textBox}</> : <>{textBox}{imgBox}</>}
    </DoubleBoxWrapper>
  );
};
