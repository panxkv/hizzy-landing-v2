import React from 'react';
import LandlordMultipleOffersImg from 'assets/illustrations/Landlord_Multiple_Offers.svg';
import LandlordAppointmentsImg from 'assets/illustrations/Landlord_appointments.svg';
import RenterRemoteVisitImg from 'assets/illustrations/Renter_Remote_Visit.svg';
import LandlordRenterApproveImg from 'assets/illustrations/Landlord_renter_approve.svg';
import LandlordPaymentsImg from 'assets/illustrations/Landlord_payments.svg';
import RenterOnlineContractImg from 'assets/illustrations/Renter_Online_Contract.svg';
import { DoubleBox } from 'components/common/DoubleBox';
import { LeftDoubleBox } from 'components/common/LeftDoubleBox';

export const LandLordInfo = () => (
  <>
    <DoubleBox
      imgSrc={LandlordMultipleOffersImg}
      detailsContent={
        <>
          <h1>Kreator ofert</h1>
          <p>Dodawaj jedną lub wiele ofert przy pomocy wygodnego kreatora ofert</p>
        </>
      }
    />

    <LeftDoubleBox
      imgSrc={LandlordAppointmentsImg}
      detailsContent={
        <>
          <h1>Kalendarz</h1>
          <p>Umawiaj się na pokazanie mieszkań w wygodnym kalendarzu</p>
        </>
      }
    />
    <DoubleBox
      imgSrc={RenterRemoteVisitImg}
      detailsContent={
        <>
          <h1>Pokaż mieszkanie online</h1>
          <p>Umawiaj się potecjalnymi najemcami przez aplikacje. Pokaż im swoje mieszkanie online</p>
        </>
      }
    />

    <LeftDoubleBox
      imgSrc={LandlordRenterApproveImg}
      detailsContent={
        <>
          <h1>Wirtualny kasting</h1>
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
          <h1>Pobieraj opłaty przez aplikacje</h1>
          <p>
            dodawaj comiesięczne opłaty w aplikacji, w tym opłaty dodatkowe (internet, prąd, etc) *otrzymuj comiesięczne
            wpłaty za miesięczny wynajem i opłaty dodatkowe za pośrednictwem aplikacji
          </p>
        </>
      }
    />

    <LeftDoubleBox
      imgSrc={RenterOnlineContractImg}
      detailsContent={
        <>
          <h1>Umowa online</h1>
          <p>
              Podpisz umowę przez aplikację (edytowane). Korzystaj z wygodnych szablonow i dopasuj je do siebie.

          </p>
        </>
      }
    />
  </>
);
