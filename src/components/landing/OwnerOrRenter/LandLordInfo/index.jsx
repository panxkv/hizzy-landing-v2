import React from 'react';
import LandlordMultipleOffersImg from 'assets/illustrations/Landlord_Multiple_Offers.svg';
import LandlordAppointmentsImg from 'assets/illustrations/Landlord_appointments.svg';
import RenterRemoteVisitImg from 'assets/illustrations/Renter_Remote_Visit.svg';
import LandlordRenterApproveImg from 'assets/illustrations/Landlord_renter_approve.svg';
import LandlordPaymentsImg from 'assets/illustrations/Landlord_payments.svg';
import RenterOnlineContractImg from 'assets/illustrations/Renter_Online_Contract.svg';
import { DoubleBox } from 'components/common/DoubleBox';

export const LandLordInfo = () => (
  <>
    <DoubleBox
      imgSrc={LandlordMultipleOffersImg}
      detailsContent={
        <>
          <h2>Kreator ofert</h2>
          <p>Dodawaj jedną lub wiele ofert przy pomocy wygodnego kreatora ofert</p>
        </>
      }
    />

    <DoubleBox
      imgSrc={LandlordAppointmentsImg}
      imgPosition="right"
      detailsContent={
        <>
          <h2>Kalendarz</h2>
          <p>Umawiaj się na pokazanie mieszkań w wygodnym kalendarzu</p>
        </>
      }
    />
    <DoubleBox
      imgSrc={RenterRemoteVisitImg}
      detailsContent={
        <>
          <h2>Pokaż mieszkanie online</h2>
          <p>Umawiaj się potecjalnymi najemcami przez aplikacje. Pokaż im swoje mieszkanie online</p>
        </>
      }
    />

    <DoubleBox
      imgSrc={LandlordRenterApproveImg}
      imgPosition="right"
      detailsContent={
        <>
          <h2>Wirtualny kasting</h2>
          <p>
            Wybieraj potencjalnych wynajmujących za pośrednictwem aplikacji, po akceptacji będą mogli umówić się na
            oględziny w wolnym terminie z twojego kalendarza
          </p>
        </>
      }
    />

    <DoubleBox
      imgSrc={LandlordPaymentsImg}
      detailsContent={
        <>
          <h2>Pobieraj opłaty przez aplikacje</h2>
          <p>
            dodawaj comiesięczne opłaty w aplikacji, w tym opłaty dodatkowe (internet, prąd, etc) *otrzymuj comiesięczne
            wpłaty za miesięczny wynajem i opłaty dodatkowe za pośrednictwem aplikacji
          </p>
        </>
      }
    />

    <DoubleBox
      imgSrc={RenterOnlineContractImg}
      imgPosition="right"
      detailsContent={
        <>
          <h2>Umowa online</h2>
          <p>
              Podpisz umowę przez aplikację (edytowane). Korzystaj z wygodnych szablonow i dopasuj je do siebie.
          </p>
        </>
      }
    />
  </>
);
