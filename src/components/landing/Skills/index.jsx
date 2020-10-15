import React from 'react';
import dev from 'assets/illustrations/Landlord_appointments.svg';
import dev2 from 'assets/illustrations/Landlord_payments.svg';
import {DoubleBox} from 'components/common/DoubleBox';

export const Skills = () => {
  return (
    <DoubleBox
      imgSrc={dev}
      detailsContent={
        <>
          <h1>Oglądanie mieszkania online</h1>
          <p>
            Umawiaj się na oglądanie mieszkania za pośrednictwem aplikacji wybierając termin z kalendarza dostępności właściciela.
          </p>
        </>
      }
    />
  )
};

export const Skills2 = () => {
  return (
    <DoubleBox
      imgLeft={false}
      imgSrc={dev2}
      detailsContent={
        <>
          <h1>Oglądanie mieszkania online</h1>
          <p>
            Umawiaj się na oglądanie mieszkania za pośrednictwem aplikacji wybierając termin z kalendarza dostępności właściciela.
          </p>
        </>
      }
    />
  )
};
