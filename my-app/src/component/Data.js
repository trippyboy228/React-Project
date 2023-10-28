import React, { useState } from 'react'
import Menuapi from './component/Menuapi'
import MenuCard from './component/MenuCard'



const Data = () => {
    const [searchTerm,setSearchTerm] = useState("")
    return (
      <div>
          <h1>Food App</h1>
          <input style={{width:"40%",height:"40px"}} type='text' placeholder='Serach here ...' onChange={(e)=>{setSearchTerm(e.target.value)}}/>
          <div style={{display:'flex',flexWrap:'wrap'}}>
          {  
              Menuapi.filter((val)=>{
                if(searchTerm === " "){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              }).map((items)=>{
                  return (
                      <MenuCard data={items}/>
                  )
              })
          }
          </div>
      </div>
    )
  }
    
  export default Data