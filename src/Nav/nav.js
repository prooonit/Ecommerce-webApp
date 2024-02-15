import './nav.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 

const NavBar = ({onSearch ,cartItemCount}) => {
  const [search,setSearch]= useState('');
 
  return (
    <div className='w-full h-14 bg-amber-400'>
      <div className='flex justify-between mx-auto max-w-5xl'>
        <div className='flex items-center text-white font-bold text-lg ml-2'>
        <Link to="/">
           Apna Mart
          </Link>
        </div>
        <div className='flex items-center mt-2 '>
          <input
            type="search"
            id="gsearch"
            value={search}
            onChange={(e)=>{
              setSearch(e.target.value)
            }}
            placeholder='Search your item...'
            name="gsearch"
            className='border p-2 rounded'
          />
          <button className='px-3 py-1 ml-3 rounded-lg bg-white' type='submit' onClick={()=>{
            if(search.trim().length){
              onSearch(search.trim())
            }
            setSearch('')
             
          }}>Search</button>
        </div>
        <div className='flex items-center text-white font-bold text-lg mr-2'>
        <Link to="/Cart">
            <button  className='px-3 py-1 ml-3 rounded-lg bg-white text-black font-normal text-sm' >
              cart- {cartItemCount}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
