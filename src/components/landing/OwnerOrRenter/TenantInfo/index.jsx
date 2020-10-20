import React from 'react';
import LandlordAppointmentsImg from 'assets/illustrations/Landlord_appointments.svg';
import RemoteVisitImg from 'assets/illustrations/Renter_Remote_Visit.svg';
import OnlineContractImg from 'assets/illustrations/Renter_Online_Contract.svg';
import RenterCommunicationImg from 'assets/illustrations/Renter_Communication.svg';
import RenterOnlinePaymentsImg from 'assets/illustrations/Renter_Online_Payments.svg';
import { DoubleBox } from 'components/common/DoubleBox';
import { LeftDoubleBox } from 'components/common/LeftDoubleBox';

export const TenantInfo = () => (
  <>
    <DoubleBox
      imgSrc={LandlordAppointmentsImg}
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

    <LeftDoubleBox
      imgSrc={RemoteVisitImg}
      detailsContent={
        <>
          <h1>Zobacz mieszkanie bez wychodzenia z domu </h1>
          <p>Bierz udział w wirtualnych/zdalnych oględzinach mieszkania.</p>
        </>
      }
    />
    <DoubleBox
      imgSrc={OnlineContractImg}
      detailsContent={
        <>
          <h1>Podpisz umowę online</h1>
          <p>Podpisz umowę przez aplikację</p>
        </>
      }
    />

    <LeftDoubleBox
      imgSrc={RenterCommunicationImg}
      detailsContent={
        <>
          <h1>Komunikacja z właścicielem</h1>
          <p>Komunikuj się z właścicielem przez aplikację</p>
        </>
      }
    />

    <DoubleBox
      imgSrc={RenterOnlinePaymentsImg}
      detailsContent={
        <>
          <h1>Płać czynsz i swoje rachunki online</h1>
          <p>Opłacaj comiesięczne rachunki przez aplikację</p>
        </>
      }
    />
  </>
);
