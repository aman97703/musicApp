import React from 'react'
import Path318 from "../img/Path 318.png"
import Feature from './Feature'

const Experience = () => {
    return (
        <div className='experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[15rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]'>
            <img src={Path318} alt="Path318" className="w-[5rem]" />
            <div className="headline mt-7 flex flex-col items-center text-[2rem]">
                <span>An Amazing App Can Change Your Daily Life</span>
                <span>
                    <b>Music Experience</b>
                </span>
            </div>
            {/* features  */}
            <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
                <Feature icon="Group 2" title="For Live Music" />
                <Feature icon="music icon" title="For Daily Music" />
                <Feature icon="Group 4" title="For Artists" />
            </div>
        </div>
    )
}

export default Experience