import React from 'react';
import dev from 'assets/illustrations/Landlord_appointments.svg';
import dev2 from 'assets/illustrations/Landlord_payments.svg';
import { DoubleBox } from 'components/common/DoubleBox';

export const TenantInfo = () => (
  <>
    <DoubleBox
      imgSrc={dev}
      detailsContent={
        <>
          <h1>Oglądanie mieszkania online</h1>
          <p>
            Umawiaj się na oglądanie mieszkania za pośrednictwem aplikacji wybierając termin z kalendarza dostępności
            właściciela.
          </p>
        </>
      }
    />
    <DoubleBox
      imgSrc={dev2}
      imgLeft={false}
      detailsContent={
        <>
          <h1>Oglądanie mieszkania online</h1>
          <p>
            Umawiaj się na oglądanie mieszkania za pośrednictwem aplikacji wybierając termin z kalendarza dostępności
            właściciela.
          </p>
        </>
      }
    />

    <DoubleBox
      imgSrc={dev}
      detailsContent={
        <>
          <h1>Oglądanie mieszkania online</h1>
          <p>
            Umawiaj się na oglądanie mieszkania za pośrednictwem aplikacji wybierając termin z kalendarza dostępności
            właściciela.
          </p>
        </>
      }
    />

    <DoubleBox
      imgSrc={dev}
      imgLeft={false}
      detailsContent={
        <>
          <h1>Oglądanie mieszkania online</h1>
          <p>
            Umawiaj się na oglądanie mieszkania za pośrednictwem aplikacji wybierając termin z kalendarza dostępności
            właściciela.
          </p>
        </>
      }
    />

    <DoubleBox
      imgSrc={dev}
      detailsContent={
        <>
          <h1>Oglądanie mieszkania online</h1>
          <p>
            Umawiaj się na oglądanie mieszkania za pośrednictwem aplikacji wybierając termin z kalendarza dostępności
            właściciela.
          </p>
        </>
      }
    />
  </>
);