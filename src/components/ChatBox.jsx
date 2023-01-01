import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import { BASE_URL } from '../constants/appConstants.js';
import sendIcon from '../assets/send-message.png'
import Message from './Message.jsx';
import SearchPopOver from './SearchPopOver';
import chatIcon from '../assets/chatIcon.png'

const ChatBox = (props) => {
    const [search, setsearch] = useState(null);
    const [messages, setmessages] = useState([]);

    const addMessage = (q, isIncoming) => {
        //set common properties
        let message = {
            ...q,
            isIncoming
        }
        setmessages(prevstate => [...prevstate, message])
    }

    const onSearchResultCallback = (q) => {
        if (!q || !q.id || q.id.length == 0) {
            console.log("zero-value received in onSearchResultCallback", q);
            return
        }

        addMessage(q, false)

        axios.get(`${BASE_URL}/qna/${q.id}`)
            .then(
                (response) => {
                    let data = response.data
                    data.id = data.qid
                    data.isInComing = true
                    addMessage(data, true);
                }
            )
            .catch(
                (err) => {
                    console.log("Following Error occurred During API Call.", err);
                }
            )
    }

    const memoizedList = useMemo(() => (messages), [messages.length])

    return (
        <div className='card-xl h-full flex flex-col rounded-br-none'>
            <div id="chat-header" className='bg-[#5a5eb9] h-14 flex-container justify-start pl-5 rounded-t-lg '>
                <img src={chatIcon}
                    className='h-full'
                />
                <div className='flex flex-col'>
                    <p className='text-white font-semibold'>Chat Bot</p>
                    <p className='text-gray-200 text-[12px]'>Online</p>
                </div>
                <div
                    className='text-white self-center ml-auto mr-5' onClick={props.onChatBotClosed}>
                    <svg className=''
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </div>
            </div>
            <div id="chat-content"
                className={`flex-1 flex-container overflow-y-auto`}>
                <Message list={memoizedList} />
            </div>

            <div id="chat-footer" className='h-16 border border-t-gray-200 flex flex-col justify-center '>
                <div className='flex flex-col-reverse w-full' >
                    <SearchPopOver searchText={search} onSearchResultCallback={onSearchResultCallback} />
                </div>
                <form className="flex flex-row h-14 p-2">
                    <input type="text"
                        className='w-full p-2 outline-none text-gray-700'
                        placeholder='Send a message...' onChange={
                            (e) => {
                                setsearch(e.target.value)
                            }
                        } />

                    <div className='w-14 flex-container inline-flex 
                     rounded-md focus:ring-4 active:bg-gray-300 active:shadow-lg transition duration-150 ease-in-out select-none'>
                        <img src={sendIcon}
                            className='w-8 h-7' alt={"send button"} />
                    </div>
                </form>

            </div>
        </div>
    );
}


export default ChatBox;

