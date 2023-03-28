import React,{useState,useEffect, useContext} from 'react';
import{RiMapLine, RiArrowDownSLine,RiArrowUpSLine}from 'react-icons/ri'

import { Menu } from '@headlessui/react'

import {HouseContext} from './HouseContext'



const CountryDropdown = () => {
const { Country,setCountry,Countres} =useContext(HouseContext)
const[isOpen,setIsOpen]=useState(false)


const hadel=(value)=>{


  setCountry(value)
  setIsOpen(!isOpen)

}


  return <Menu     as='div' className='dropdown relative '>
    
    <Menu.Button onClick={()=>setIsOpen(!isOpen)} className='dropdown-btn w-full'>
      <RiMapLine className='dropdown-icon-primary'/>
      <div>
        <div className='text-[15px] font-medium leading-tight'>{Country}</div>
        <div className='text-[13px]'> Select your place </div>
        </div>
        {
          isOpen ?<RiArrowUpSLine className='dropdown-icon-secondary'  />:<RiArrowDownSLine className='dropdown-icon-secondary' /> 
        }
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {Countres.map((country,index)=>{

        return (
          <Menu.Item
          
          onClick={()=>hadel(country)}
          className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
            {country}
          </Menu.Item>
        )

      })}
    </Menu.Items>
    
    </Menu>;

};

export default CountryDropdown;
