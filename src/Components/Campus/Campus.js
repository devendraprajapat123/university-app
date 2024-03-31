import React from 'react'
import './Campus.css'
import Gallery_1 from '../../Assets/gallery-1.png'
import Gallery_2 from '../../Assets/gallery-2.png'
import Gallery_3 from '../../Assets/gallery-3.png'
import Gallery_4 from '../../Assets/gallery-4.png'
import white_arrow from '../../Assets/white-arrow.png'



const Campus = () => {
    return (
        <div className='campus'>
            <div className='gallery'>
                <img src={Gallery_1} alt=''></img>
                <img src={Gallery_2} alt=''></img>
                <img src={Gallery_3} alt=''></img>
                <img src={Gallery_4} alt=''></img>

            </div>
            <button className='btn dark-btn'>See more here <img src={white_arrow} alt=''></img></button>
        </div>
    )
}

export default Campus