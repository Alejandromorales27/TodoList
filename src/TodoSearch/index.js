import './TodoSearch.css'
import React from 'react'

function TodoSearch({searchValue,setSearchValue}){


    return(
        <input
        value={searchValue}
        onChange={(event)=>{
          setSearchValue(event.target.value)
        }}
         placeholder="cortar cebolla"/>
    );
  }


export {TodoSearch};