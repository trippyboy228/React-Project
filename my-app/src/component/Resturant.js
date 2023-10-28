import React, { useState } from 'react';
import './style.css';
import Menu from './Menuapi.js';
import MenuCard from './MenuCard.js';
import Navbar from './Navbar';
import Data from './Data';


const uniqueList=[
    ...new Set(Menu.map((curElem)=>{
        return curElem.category;
    })
    ),
    "All"
];
console.log(uniqueList);
const Resturant=()=>{
    const [menuData,setMenuData]= useState(Menu);
    const [MenuList,setMenuList]= useState(uniqueList);
   
    const filterItem = (category) => {
        if (category === "All") {
          setMenuData(Menu);
          return;
        }

      
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category==category;
        })
        setMenuData(updatedList);
      };

    return(<>
      <Navbar filterItem={filterItem} MenuList={MenuList}/>
       <MenuCard menuData={menuData} /> 
       <Data />
    </>)
    
}
export default Resturant;