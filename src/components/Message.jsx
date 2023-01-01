import React, { useState, useEffect } from 'react';

const OutgoingMessage = (props) => {
    return (
        <div className='w-full flex flex-col items-end pt-3 px-3'>
            <div id="message-container" className='w-[70%] flex flex-1 justify-end '>
                <p id="message-content" className='max-w-[85%]  flex-container text-sm text-white text-left font-light bg-[#5e7cf7] rounded-2xl rounded-br-none p-3 pb-3'>
                    {props.message.content}
                </p>
                <span className='max-w-[15%] w-[15px] h-[15px] invisible'>
                    <img id="avatar" alt='avatar-icon' src={props.message.avtar} />
                </span>

            </div>
        </div>
    );
}

const IncomingMessage = (props) => {
    return (
        <div className='w-full flex flex-col items-start pt-3 px-3'>
            <div id="message-container" className='w-[70%] flex flex-1 justify-start '>
                <span className='max-w-[15%] w-[15px] h-[15px] invisible'>
                    <img id="avatar" alt='avatar-icon' src={props.message.avtar} />
                </span>
                <p id="message-content" className='max-w-[85%]  flex-container text-sm text-white text-left font-light bg-[#f0d341] rounded-2xl rounded-bl-none p-3 pb-3'>
                    {props.message.content}
                </p>
            </div>
        </div>

    );
}


const Message = (props) => {
    const [state, setstate] = useState([...props.list]);

    useEffect(() => {
        setstate(props.list);
    }, [props.list.length]);


    console.log("Message Component : ", state);
    return (
        <div className='w-full h-full flex flex-col '>
            {
                state.map((msg) => (
                    msg.isIncoming ?
                        <IncomingMessage key={msg.id} message={msg} /> :
                        <OutgoingMessage key={msg.id} message={msg} />
                )
                )
            }
        </div>
    );
}

export default Message;
// const OutgoingMessage = (props) => {
//     return (
//         <div className='h-full w-full flex flex-col flex-wrap pt-3 px-3 '>
//             <div id="message-container" className='w-[70%] self-end flex flex-wrap'>
//                 <div className='w-[90%] bg-[#5e7cf7] rounded-xl rounded-br-none py-1 px-2 text-sm text-left text-white'>
//                     {props.message.content}
//                 </div>
//             </div>
//         </div>
//     );