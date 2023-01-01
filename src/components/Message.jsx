import React, { useState, useEffect } from 'react';

const OutgoingMessage = (props) => {
    return (
        <div className='h-full w-full flex flex-col flex-wrap pt-3 px-3 '>
            <div id="message-container" className='w-[70%] self-end flex flex-wrap'>
                <div className='w-[90%] bg-[#5e7cf7] rounded-xl rounded-br-none py-1 px-2 text-sm text-left text-white'>
                    {props.message.content}
                </div>
            </div>
        </div>
    );
}

const IncomingMessage = (props) => {
    return (
        <div className='h-full w-full flex flex-col flex-wrap pt-3 px-3'>
            <div id="message-container" className='w-[70%] self-start flex flex-wrap'>
                <div className='w-[90%] bg-[#f0d341]  rounded-xl rounded-bl-none  py-1 px-2 text-sm text-left text-white'>
                    {props.message.content}
                </div>
            </div>
        </div>
    );
}


const Message = (props) => {
    const [state, setstate] = useState([...props.list]);

    useEffect(() => {
        setstate(props.list);
    }, [props.list.length]);


    console.log("Message Component : ",state);
    return (
        <div>
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
