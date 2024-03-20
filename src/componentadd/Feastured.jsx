import React, { useEffect, useState } from 'react'
import './Feastured.css'
// Event-Handler\Event-Handler\eventpro\eventpro\src\Services\EventService.js
import EventDataService from "../Services/EventService";
import {data} from './FeasturedData'
import { MdChevronLeft ,MdChevronRight} from 'react-icons/md'
import { TableVie } from './TableVie';
const Feastured = () => {
  const[val,setVal]=useState(null)
  const fet = async()=>{
    EventDataService.get().then((res)=>{
      console.log("succcess",res.data.data)
      setVal(res.data.data)
      console.log(val)
    })
  }
  useEffect(()=>{fet()},[])
    const sliderLeft=()=>{
        var slider=document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft-500;
    }
    const sliderRight=()=>{
        var slider=document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft+500;
    }
  return (
    <div className='Feastured'>
        <div className="f-head">
          <h1>
             FEASTURED EVENTS
          </h1>
        </div>
      <div>
      "  FESTIVALS ARE A TIME TO PLAY THE SONGS PEOPLE KNOW AND ARE LOOKING FORWARD TO HEARING "
      </div><br />
    <div className='relative flex items-center'> 
    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={sliderLeft} size={40} />
        <div id="slider" className='feastured w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
           {data.map((item)=>(
           <img
           className='w-[250px] h-[380px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' 
           src={item.img} alt="" />
           ))}

        </div>
    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={sliderRight} size={40} />
    </div>

    <h1>hello</h1>
    <div>
      <table style={{margin:'50px auto'}}> 
        <thead style={{color:'gold',fontSize:'22px',borderBottom:'3px solid silver'}}>
          <th>Name</th>
          <th>Email</th>
          <th>Location</th>
          <th>Number</th>
          <th>Event</th>
          <th>Budget</th>
          <th>Description</th>
        </thead>
        <tbody>
            {(val!=null) ? val.map((e)=>{
              return <TableVie dat={e}/>
            }):<></>}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Feastured