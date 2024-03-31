import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import main_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import white_arrow from '../../Assets/white-arrow.png'



const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b380bce5-4edf-4130-8afd-92edbd98b7de");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");

            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className='contact-cal'>
                <h3>Send us a Message <img src={msg_icon} alt=''></img> </h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={main_icon} alt=''></img>devendraprajapat312@gmail.com</li>
                    <li> <img src={phone_icon} alt=''></img> +91 123-456-7890</li>
                    <li><img src={location_icon} alt=''></img> 77 Vijay Nagar, indore, India</li>

                </ul>
            </div>
            <div className='contact-cal'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter Your Name' required></input>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required></input>
                    <label>Enter Email</label>
                    <input type='tel' name='email' placeholder='Enter Your Email Id' required></input>
                    <label>Write your Message Here</label>
                    <textarea name='message' rows='6' placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt=''></img></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact