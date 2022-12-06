import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityInfo } from "../redux/actions/actions";



export default function CityInfo({id}){

    let dispatch = useDispatch()
    let city = useSelector(state => state.cityInfo)


    useEffect(()=>{
        dispatch(getCityInfo(id))
    },[])

    return(
        
        <div className=" w-full h-[90%] flex items-center justify-center overflow-auto">
            <div className=" text-gray-200 sm:w-[60%] sm:max-w-[500px] sm:h-[70%] w-[95%] h-[98%] border-black rounded-[18px] bg-zinc-900 bg-opacity-80 p-[10px] border-[2px] flex flex-col items-center justify-between" >
                <div className="w-[90%]" >
                    <h1 className="text-[1.6rem] font-[600]">{city.name}</h1>
                    <h3 className="text-[1rem]">Country: {city.country}</h3>
                </div>
                <div >
                    <div className="flex justify-center ">
                        <img className=" h-[100px] " src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt={`${city.description} Weather`} />
                    </div>
                    <h3 className="text-[1.4rem] font-[500]">Actual Temperature: {city.temp}° </h3>
                    <div className="text-[1.3rem] font-[500] flex justify-around">
                        <h4>Max: {city.max}° </h4>
                        <h4>Min: {city.min}° </h4>
                    </div>
                </div>
                <div className=" text-[1.1rem] w-[85%] h-[40%] flex flex-col justify-center ">
                    <h4>Pressure: {city.pressure}</h4>
                    <h4>Humidity: {city.humidity}</h4>
                    <h4>Weather: {city.weather} </h4>
                    <h4>Latitude: {city.lat} </h4>
                    <h4>Longitude: {city.lon} </h4>
                </div>
            </div>
        </div>
    )
}