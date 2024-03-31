import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../../Assets/next-icon.png'
import back_icon from '../../../Assets/back-icon.png'
import user_1 from '../../../Assets/user-1.png'
import user_2 from '../../../Assets/user-2.png'
import user_3 from '../../../Assets/user-3.png'
import user_4 from '../../../Assets/user-4.png'




const Testimonial = () => {

    const slider = useRef()
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translate(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translate(${tx}%)`
    }

    return (
        <div className='Testimonials'>
            <img src={next_icon} alt=' ' className='next-btn' onClick={slideForward}></img>
            <img src={back_icon} alt=' ' className='back-btn' onClick={slideBackward}></img>
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt=''></img>
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt=''></img>
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt=''></img>
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt=''></img>
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                </ul>
            </div>


        </div>
    )
}

export default Testimonial