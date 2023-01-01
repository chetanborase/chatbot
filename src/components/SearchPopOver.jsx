import React, {useEffect, useState} from "react";
import useDebounce from "../hooks/useDebounce.jsx";
import axios from "axios";
import {BASE_URL} from "../constants/appConstants.js";

const SearchPopOver = (props) => {
    const [state, setstate] = useState([]);

    const searchTerm = useDebounce(props.searchText, 500);

    useEffect(() => {
        if (!searchTerm || searchTerm.length < 3) {
            return
        }

        axios.get(`${BASE_URL}/qna?q=${searchTerm}`)
            .then(
                (response) => {
                    console.log("response received.", response);
                    setstate({
                        data: response.data
                    })
                }
            )
            .catch(
                (err) => {
                    console.log("Following Error occured During API Call.", err);
                }
            )
    }, [searchTerm]);

    return (
        state?.data ?
            <div id="popover-top" role="tooltip"
                 className="absolute z-10 visible inline-block full text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100">
                <ul className=''>
                    {state.data.map((q) => (
                        <li key={q.id} className="px-3 py-2"
                            onClick={(e) => {
                                console.log("id is :", q.id);
                                props.onSearchResultCallback(q)
                                setstate(null)
                            }}>
                            <p>{q.content}</p>
                        </li>
                    ))
                    }
                </ul>
            </div> :
            <></>
    );
}


export default SearchPopOver;