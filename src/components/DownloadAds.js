import React from 'react'
import AppleStore from "../img/App Store.png"
import GooglePlayStore from "../img/Google Play.png"

const DownloadAds = () => {
    const downloadImgStyle = "border-[2px] border-[#232a4e] rounded-[13px] h-[3rem] w-[10rem]"
  return (
    <div className='download'>
        <div className="download_images flex">
            <img src={AppleStore} alt="AppleStore" className={`${downloadImgStyle} mr-[1rem]`} />
            <img src={GooglePlayStore} alt="GooglePlayStore" className={downloadImgStyle} />
        </div>
    </div>
  )
}

export default DownloadAds