import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact-phone.svg';
import {Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Container>
    <div>
    </div>
    <Wrapper as={Container} id="contact">
      <Details>
        <h2>Skontaktuj się z nami!</h2>
        <p>Pracujemy intensywnie, żeby jak najszybciej pokazać światu naszą aplikację. Jeśli masz uwagi, propozycje lub pytania co do jej funkcji lub chciałbyś dołączyć do grona wczesnych użytkowników - nie zwlekaj - napisz do nas!</p>
        <ContactForm />
      </Details>
      <Thumbnail>
        <img src={contact} alt="Contact us" />
      </Thumbnail>
    </Wrapper>
  </Container>
);
