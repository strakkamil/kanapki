import React from 'react'
import './cookies.css'

const Cookies = (props) => {
  return (
    <div className='cookies'>
      <p><span>Używamy plików cookies, aby ułatwić Ci korzystanie z naszej strony. Jeśli nie blokujesz tych plików, to zgadzasz się na ich użycie oraz zapisanie w pamięci urządzenia. Pamiętaj, że możesz samodzielnie zarządzać cookies, zmieniając ustawienia przeglądarki. Więcej informacji w naszej </span><span onClick={props.handlePrivacyPolicy}>polityce prywatności</span>.</p>
      <button onClick={props.handleAcceptCookies}>Zgadzam się</button>
    </div>
  )
}

export default Cookies