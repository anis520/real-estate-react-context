import { type } from '@testing-library/user-event/dist/type';
import React ,{useState , useEffect , createContext}from 'react';



import {housesData}from '../data'

export const HouseContext =createContext()

const HouseContextProvider = ({children}) => {
  
  const [Houses ,setHouses]=useState(housesData)
  const [Country,setCountry]=useState("location (any)")
  const [Countres,setCountres]=useState([])
  const [Property,setProperty]=useState('property (any)')
  const [Propertes,setPropertes]=useState([])
  const [Price,setPrice]=useState('Proce range (any)')
  const [loading,setloading]=useState(false)
  



// coutres  
useEffect(()=>{


const allcountries=Houses.map((house)=>{
  return house.country
})

const uniqueCoutreis=['location (any)',...new Set(allcountries)]

setCountres(uniqueCoutreis);
// console.log(uniqueCoutreis); 

},[])





// propites type  
useEffect(()=>{


const allPropites=Houses.map((house)=>{
  return house.type
})

const uniqueTypes=['property(any)',...new Set(allPropites)]

setPropertes(uniqueTypes);
// console.log(uniqueCoutreis); 

},[])



const handleClick =()=>{
  setloading(true)
   const isDefault=(str)=>{
    return str.split(' ').includes('(any)')
   }

 
 const minPrice=parseInt(Price.split(' ')[0])
 const maxPrice=parseInt(Price.split(' ')[2])
 
 const newHouses =housesData.filter((house)=>{
  // console.log(Number(house.price))
  // console.log(+house.price)
  const houseprice=parseInt( house.price)

   if(house.country === Country && house.type === Property && houseprice >= minPrice && houseprice <= maxPrice){
    return house
   }
   if(isDefault(Country) && isDefault(Property) && isDefault(Price)){

         return house


   }
   if(!isDefault(Country) && isDefault(Property) && isDefault(Price)){

         return house.country === Country


   }
   if(isDefault(Country) && !isDefault(Property) && isDefault(Price)){

         return house.type === Property


   }
   if(isDefault(Country) && isDefault(Property) && !isDefault(Price)){

         if(houseprice >= minPrice && houseprice <= maxPrice){
          return house
         }


   }


  //  coutry and propyte
   if(!isDefault(Country) && !isDefault(Property) && isDefault(Price)){

         if(house.type === Property &&house.country === Country){
          return house
         }


   }

  //  coutry and price
   if(!isDefault(Country) && isDefault(Property) && !isDefault(Price)){

    if(houseprice >= minPrice && houseprice <= maxPrice){
      return house.country === Country
     }


   }

  //  propaty and price
   if(isDefault(Country) && !isDefault(Property) && !isDefault(Price)){

    if(houseprice >= minPrice && houseprice <= maxPrice){
      return house.type === Property
     }


   }

})

 setTimeout(() => {
  
   return newHouses.length < 1 ? setHouses([]):setHouses(newHouses),setloading(false)

 },[1000]);

 


}



  return (
  <HouseContext.Provider value={{

   Country,
   setCountry,
   Countres,
   setCountres,
   Property,
   setProperty,
   Propertes,
   setPropertes,
   Price,
   setPrice,
   Houses,
   loading,
   handleClick

  }}>{children}</HouseContext.Provider>)

}

export default HouseContextProvider;
