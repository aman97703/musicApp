import React from 'react'
import logo from "../img/MuzicLogo.png"
import CenterMenu from './CenterMenu'

const Header = () => {
    const btnStyle = "border-[2px] rounded-[10px] border-[#232A4E] px-[25px]";

    return (
        <div className='header bg-[#081730] flex justify-between items-center px-[5rem] pt-[2.4rem] text-[0.8rem]'>
            <img src={logo} alt="logo" className='logo w-[42px] h-[42px]' />
            <CenterMenu />
            <div className="buttons flex">
                <button className={`${btnStyle} mr-[35px] hover:bg-[#232A4E]`}>Sign Up</button>
                <button className={`${btnStyle} mr-[35px] bg-[#232A4E]`}>Login</button>
            </div>
        </div>
    )
}

export default Header