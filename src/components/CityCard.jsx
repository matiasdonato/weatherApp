import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCity } from "../redux/actions/actions";



export default function CityCard({city}) {
    
    let dispatch = useDispatch();

    return(
            <div className=" hover:scale-[1.1] h-[270px] w-[70%] relative max-w-[270px] mt-[1.5vh] mb-[1.5vh] mr-[1.5vh] ml-[1.5vh] lg:mr-4 lg:ml-4 transition-all ">
                <button onClick={() => dispatch(deleteCity(city.id))} className=" hover:bg-red-900 hover:scale-[1.2] transition-all bg-black w-[25px] h-[25px] rounded-[20px] absolute top-[7px] left-[7px] text-gray-200 " >X</button>
                <Link to={`/city/${city.id}`}>
                <div className=" h-full border-black rounded-[18px] bg-zinc-900 bg-opacity-80 p-[10px] w-full border-[2px] flex flex-col items-center" >
                    <h2 className=" text-[1.8rem] text-gray-200 font-[600] " >{city.name}</h2>  
                    <img src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} className="w-[140px] " alt={`${city.name} Weather`} /> 
                    <h3 className="text-[1.4rem] text-gray-200">Actual Temp:  {city.temp}°</h3>
                    <div className="text-[1.2rem] text-gray-200 flex justify-between w-[94%] items-center">
                        <h4>Max:  {city.max}°</h4>
                        <h4>Min:  {city.min}°</h4>
                    </div>
                </div>
                </Link>
            </div>
    )
}