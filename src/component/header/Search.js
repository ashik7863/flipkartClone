import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div className='search-box'>
      <input type="text" placeholder='Search for products, brands and more' name="" id="" />
      <div className='search-icon'>
      <SearchIcon/>
      </div>
    </div>
  )
}

export default Search
