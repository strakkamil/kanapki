import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className={props.privacyPolicy ? 'privacy-policy active' : 'privacy-policy'}>
      <div className='policy-close' onClick={props.handlePrivacyPolicy}>
        <CloseIcon
          fontSize='large'
          style={{ color: '#F12B81', cursor: 'pointer' }}
        />
      </div>
      <div className='policy-wrapper'>
        <h5>Kanapkarnia polityka prywatności</h5>
        <p>Zapewniamy korzystanie z funkcji społecznościowych, co może wiązać się z wykorzystywaniem plików cookies administratorów serwisów społecznościowych takich jak Facebook. Wyżej wymieniona aplikacja do swojego prawidłowego działania używa plików cookies.</p>
        <p>Do komunikowania się z Tobą używamy Messengera.</p>
        <p>Platforma Messenger, jako część spółki Facebook, w większości przypadków pełni rolę administratora danych, ponieważ konwersacje pomiędzy ludźmi i firmami są uważane za aktywność na platformie.</p>
        <p>Administratorem strony Kanapkarnia. Kontakt z administratorem możliwy jest pod adresem e-mail: sddasdasdsadsadsadsa</p>
        <p>Na potrzeby niniejszej polityki prywatności, przyjmuje się następujące znaczenie poniższych pojęć:</p>
        <p>Administrator – właściciel</p>
        <p>Strona – strona internetowa dostępna pod adresem dasdasdas</p>
        <p>Użytkownik – każdy podmiot, który korzysta ze Strony.</p>
        <p>Dane te są przechowywane na serwerach OVH (hostingodawcy), z którym została zawarta umowa powierzenia przetwarzania danych osobowych. Oprócz tego, subskrybując bloga poprzez aplikacje Messenger, użytkownik również przekazuje dane Administratorowi oraz firmie Facebook.</p>
        <p>Administratorem danych osobowych Użytkownika jest Administrator.</p>
        <p>Administrator gwarantuje poufność wszelkich przekazanych mu danych osobowych oraz nie udostępnia przekazanych mu danych jakimkolwiek podmiotom trzecim.</p>
        <p>Administrator wykorzystuje pliki cookies (ciasteczka), czyli niewielkie informacje tekstowe, przechowywane na urządzeniu końcowym Użytkownika (np. komputerze, tablecie, smartfonie). Cookies mogą być odczytywane przez system teleinformatyczny Administratora.</p>
        <p>Administrator przechowuje pliki cookies na urządzeniu końcowym Użytkownika, a następnie uzyskuje dostęp do informacji w nich zawartych w celach statystycznych, w celach marketingowych (remarketing) oraz w celu zapewnienia prawidłowego działania Strony.</p>
        <p>Administrator informuje niniejszym Użytkownika, że istnieje możliwość takiej konfiguracji przeglądarki internetowej, która uniemożliwia przechowywanie plików cookies na urządzeniu końcowym Użytkownika. W takiej sytuacji, korzystanie ze Strony przez Użytkownika może być utrudnione.</p>
        <p>Administrator wskazuje niniejszym, że pliki cookies mogą być przez Użytkownika usunięte po ich zapisaniu przez Administratora, poprzez odpowiednie funkcje przeglądarki internetowej, programy służące w tym celu lub skorzystanie z odpowiednich narzędzi dostępnych w ramach systemu operacyjnego, z którego korzysta Użytkownik.</p>
        <p>Administrator informuje niniejszym Użytkownika, że stosuje następujące technologie śledzące działania podejmowane przez Użytkownika w ramach Strony: piksel konwersji Facebooka (w celu zarządzania reklamami na Facebooku i prowadzenia działań remarketingowych).</p>
        <p>Korzystanie ze Strony wiąże się z przesyłaniem zapytań do serwera, na którym przechowywana jest Strona.</p>
        <p>Każde zapytanie skierowane do serwera zapisywane jest w logach serwera. Logi obejmują m.in. adres IP Użytkownika, datę i czas serwera, informacje o przeglądarce internetowej i systemie operacyjnym, z jakiego korzysta Użytkownik.</p>
        <p>Logi zapisywane i przechowywane są na serwerze.</p>
        <p>Dane zapisane w logach serwera nie są kojarzone z konkretnymi osobami korzystającymi ze Strony i nie są wykorzystywane przez Administratora w celu identyfikacji Użytkownika.</p>
        <p>Logi serwera stanowią wyłącznie materiał pomocniczy służący do administrowania Stroną, a ich zawartość nie jest ujawniana nikomu poza osobami upoważnionymi do administrowania serwerem.</p>
      </div>
    </div>
  )
}

export default PrivacyPolicy