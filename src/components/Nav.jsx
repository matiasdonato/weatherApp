import React from "react";
import { Link, Route } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";




export default function Nav(){
    return(
        <div className=" bg-black py-3 flex justify-evenly items-center flex-col w-[100%] lg:flex-row " >
            <Link to={"/"}>
                <h1 className=" text-gray-200 text-[1.8rem] lg:text-[2.4rem] font-[900] ">Weather App</h1>
            </Link>
            <Route exact path={"/"} render={()=> <SearchBar/>} />
        </div> 
    )
    
}