import React, { useState } from 'react';
import ChatBox from './components/ChatBox.jsx';
import ChatBot from './components/ChatBot.jsx';

const App = () => {

  return <div className='w-screen h-screen '>
    {/* <HeroSpace /> */}
    <ChatBot />
  </div>
}

export default App;

// const HeroSpace = (props) => {
//   return (
//     <div className='w-full h-full ml-[50px] z-0 flex flex-col justify-center '>
//       <div className=' w-[70%] h-[60%] flex-container flex-col'>
//         <div id="title" className='text-white text-2xl font-extrabold '>
//           React Simple Chatbot
//         </div>
//         <div id='subtitle' className='text-white text-lg font-extralight'>
//           A simple react chatbot component
//         </div>
//       </div>
//     </div>
//   );
// }
