import React from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat';

const pageId = "481587705269082"
const appId = '230844414910846'

const Messenger = (props) => {
  return (
    <MessengerCustomerChat
      pageId={pageId}
      appId={appId}
      language="pl_PL"
    />
  )
}

export default Messenger