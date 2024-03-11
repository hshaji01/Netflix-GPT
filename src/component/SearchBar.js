import React from 'react';
import { lang } from '../utils/LangConstant';
import { useSelector } from 'react-redux';

const SearchBar = () => {
    const preferredLang = useSelector(res=> res.config.lang);
  return (
    <div className='pt-44 w-[60%] mx-auto'>
        <form className='bg-black'>
            <input className=' w-[540px] bg-white my-3 mr-3 placeholder:pl-3'  type='text' placeholder={lang[preferredLang].searchplaceholder} />
            <button className=' bg-red-600 text-white font-bold rounded-lg h-12 w-40 px-3'>{lang[preferredLang].search}</button>
        </form>
    </div>
  )
}

export default SearchBar