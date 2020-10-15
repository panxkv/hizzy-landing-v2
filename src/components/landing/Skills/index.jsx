import React from 'react';
import dev from 'assets/illustrations/Landlord_appointments.svg';
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


export const Skills3 = () => {
    return (
        <DoubleBox
            imgLeft={false}
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
