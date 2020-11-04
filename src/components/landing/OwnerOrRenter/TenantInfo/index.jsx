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
          <h2>Umawiaj się na oględziny przez kalendarz online</h2>
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
          <h2>Zobacz mieszkanie bez wychodzenia z domu</h2>
          <p>Nie możesz pojawić się osobiście? Bierz udział w wirtualnych oględzinach mieszkania poprzez połączenie wideo z właścicielem lub spaceruj po mieszkaniu korzystając z technologii VR 360.</p>
        </>
      }
    />
    <DoubleBox
      imgSrc={OnlineContractImg}
      detailsContent={
        <>
          <h2>Podpisz umowę online</h2>
          <p>Stwierdziłeś, że znalazłeś wymarzone mieszkanie? Poinformuj o tym właściciela jednym kliknięciem, a otrzymasz treść umowy do podpisu elektronicznego.</p>
        </>
      }
    />

    <DoubleBox
      imgSrc={RenterOnlinePaymentsImg}
      imgPosition="right"
      detailsContent={
        <>
          <h2>Płać czynsz i swoje rachunki online</h2>
          <p>Otrzymuj comiesięczne rachunki za czynsz od właściciela wewnątrz aplikacji. Następnie opłać je w kilka sekund poprzez zintegrowane płatności online.</p>
        </>
      }
    />

    <DoubleBox
      imgSrc={RenterCommunicationImg}
      detailsContent={
        <>
          <h2>Komunikuj się z właścicielem przez aplikację</h2>
          <p>Zepsuty kran? A może nie jesteś pewien, czy możesz wywiercić dziurę w ścianie? Skontaktuj się z właścicielem przy pomocy wbudowanego komunikatora.</p>
        </>
      }
    />
  </>
);
