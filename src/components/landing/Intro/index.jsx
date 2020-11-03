import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/kobitka.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Szwajcarski scyzoryk w świecie najmu nieruchomości</h1>
          <h2>Hizzy to pierwsza platforma przenosząca cały proces najmu w świat cyfrowy. Oferujemy szereg narzędzi, które ułatwią Ci życie i pozwolą zaoszczędzić czas na każdym etapie najmu - niezależnie od tego czy jesteś najemcą, czy właścicielem.</h2>
          <Button as={AnchorLink} href="#contact">
            Brzmi ciekawie? Daj nam znać!
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Hizzy makes it easy" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
