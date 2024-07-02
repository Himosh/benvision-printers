import React from 'react'
import './ContactSection.css'
import ContactImg from '../Assets/ContactImg.png'

export const ContactSection = () => {
    return (
        <div id='ContactSection'>
            <div id="ContactImg">
                <img src={ContactImg} />
            </div>
            <div id="ContactSectionHead">
                <h2>Reach out to us</h2>
                <p3>Fill up the form and we will get back to you within 24 hours.</p3>

                <div id="ContactSectionCon">
                    <div id="Contact1">
                        <label id='Name'>Name</label>
                    </div>
                    <input id='Input' type="text" />

                    <div id="Contact2">
                        <label id='Email'>Email Address</label>
                    </div>
                    <input id='Input' type="text" />

                    <div id="Contact3">
                        <label id='Phone'>Phone no</label>
                    </div>
                    <input id='Input' type="text" />

                    <div id="Contact4">
                        <label id='Message'>Message</label>
                    </div>
                    <input id='InputMessage' type="text" />

                    <div className='SubmitButton'>
                        <button id='SubmitButton'>Submit</button>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default ContactSection