import React from 'react';
import LandlordAppointmentsImg from 'assets/illustrations/Landlord_appointments.svg';
import RemoteVisitImg from 'assets/illustrations/Renter_Remote_Visit.svg';
import OnlineContractImg from 'assets/illustrations/Renter_Online_Contract.svg';
import RenterCommunicationImg from 'assets/illustrations/Renter_Communication.svg';
import RenterOnlinePaymentsImg from 'assets/illustrations/card3.svg';
import { DoubleBox } from 'components/common/DoubleBox';

export const TenantInfo = () => (
  <>
    <DoubleBox
      imgSrc={LandlordAppointmentsImg}
      detailsContent={
        <>
          <h1>Umawiaj się na oględziny przez kalendarz online</h1>
          <p>
            Koniec ze żmudnymi telefonami. Zapisuj się na oględziny mieszkania za pośrednictwem aplikacji, wybierając dogodny termin z kalendarza dostępności właściciela.
          </p>
        </>
      }
    />

    <DoubleBox
      imgSrc={RemoteVisitImg}
      imgPosition="right"
      detailsContent={
        <>
          <h1>Zobacz mieszkanie bez wychodzenia z domu</h1>
          <p>Nie możesz pojawić się osobiście? Bierz udział w wirtualnych oględzinach mieszkania poprzez połączenie wideo z właścicielem lub spaceruj po mieszkaniu korzystając z technologii VR 360.</p>
        </>
      }
    />
    <DoubleBox
      imgSrc={OnlineContractImg}
      detailsContent={
        <>
          <h1>Podpisz umowę online</h1>
          <p>Stwierdziłeś, że znalazłeś wymarzone mieszkanie? Poinformuj o tym właściciela jednym kliknięciem, a otrzymasz treść umowy do podpisu elektronicznego.</p>
        </>
      }
    />

    <DoubleBox
      imgSrc={RenterOnlinePaymentsImg}
      imgPosition="right"
      detailsContent={
        <>
          <h1>Płać czynsz i swoje rachunki online</h1>
          <p>Otrzymuj comiesięczne rachunki za czynsz od właściciela wewnątrz aplikacji. Następnie opłać je w kilka sekund poprzez zintegrowane płatności online.</p>
        </>
      }
    />

    <DoubleBox
      imgSrc={RenterCommunicationImg}
      detailsContent={
        <>
          <h1>Komunikuj się z właścicielem przez aplikację</h1>
          <p>Zepsuty kran? A może nie jesteś pewien, czy możesz wywiercić dziurę w ścianie? Skontaktuj się z właścicielem przy pomocy wbudowanego komunikatora.</p>
        </>
      }
    />
  </>
);
