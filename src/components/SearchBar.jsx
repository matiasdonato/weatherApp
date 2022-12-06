import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../redux/actions/actions";




export default function SearchBar() {
    const [input, setInput] = useState("")

    let found = useSelector(state => state.found)
    let avaible = useSelector(state => state.avaible)

    let dispatch = useDispatch()

    function searchCity(e){
        e.preventDefault();
        dispatch(getCity(input));
        setInput("")
    }
    
    return(
        <div>
            <form onSubmit={searchCity} className="sm:flex" >
                <div>
                    <input type="text" value={input} className="h-[30px] pl-2 rounded-[10px] w-[180px] mr-4" onChange={(e) => setInput(e.target.value)} />
                    <input type="submit" value={"Search"} className=" rounded-[10px] bg-white h-[30px] w-[80px]"  />
                </div>
                <div className=" flex items-center justify-center sm:ml-[20px]">
                    {found === false ? <span className=" text-gray-200 "> City not found</span> :
                    avaible === true && <span className=" text-gray-200 "> City already avaible</span>}
                </div>
            </form>
        </div>
    )
    
}