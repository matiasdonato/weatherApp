import React from "react";
import { useSelector } from "react-redux";
import CityCard from "./CityCard.jsx";



export default function CitiesBox() {
    let cities = useSelector(state => state.cities)
    console.log(cities)

    return(
        <div className="w-full h-[100%] py-[1.5vh] overflow-auto flex justify-center lg:justify-start lg:w-[99%] flex-wrap" >
            {cities.length > 0 && cities.map(c => <CityCard city={c}/>)}
        </div>
    )
}