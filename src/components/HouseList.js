import React, { useContext } from 'react';
import {HouseContext} from './HouseContext'
 
import House from './House'


import {Link}from 'react-router-dom'

import {ImSpinner2} from 'react-icons/im'
import { ScaleLoader } from 'react-spinners';
import SyncLoader from 'react-spinners/SyncLoader';

const HouseList = () => {

const {Houses,loading} =useContext(HouseContext)
   return <section className='mb-20'>
    
    <div className='container mx-auto'>

{loading ?<div className='  flex items-center justify-center w-full h-[300px]'><ScaleLoader  color="#5B21B6" /></div> :(

  
  <div  className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14' >


          {Houses.map((house,index)=>{
            
            return(
              
              <Link to={`/property/${house.id}`} key={index}>
      <House     house={house}/>
      
      </Link>

)


})}





      </div>
 
)}
 
 


    </div>
    
    </section>;
};

export default HouseList;
