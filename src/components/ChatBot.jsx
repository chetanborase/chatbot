import React, { useState } from 'react';
import chatIcon from './../assets/chat.png'
import ChatBox from './ChatBox';

const ChatBot = () => {
  const [show, setShow] = useState(false);

  const toggleChatBox = () => {
    setShow((prevState) => (!prevState))
  }

  return (
    <div 
    >  {
        show ?
          <div className='w-[400px] h-[500px] p-5 z-20 absolute bottom-16 right-5 '>
            <ChatBox onChatBotClosed={toggleChatBox} />
          </div> : null
      }

      <img
        src={chatIcon}
        alt='chat-icon'
        className='absolute z-10 h-12 w-12 overflow-hidden bottom-5 right-5 ' onClick={toggleChatBox}
      />
    </div >
  );
}


export default ChatBot;
